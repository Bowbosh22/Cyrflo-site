// api.js — Connexion du frontend Cyrflo à l'API backend
// ───────────────────────────────────────────────────────
// URL de base de l'API (en développement : localhost:4000)
// En production, remplace par l'URL Railway de ton backend.
const API_URL = 'https://cyrflolekoulou-backend-production.up.railway.app/api';
// ── Gestion du token (stocké dans le navigateur) ──
function saveToken(token) {
  localStorage.setItem('cyrflo_token', token);
}
function getToken() {
  return localStorage.getItem('cyrflo_token');
}
function clearToken() {
  localStorage.removeItem('cyrflo_token');
  localStorage.removeItem('cyrflo_user');
}
function isLoggedIn() {
  return !!getToken();
}
function saveUser(user) {
  localStorage.setItem('cyrflo_user', JSON.stringify(user));
}
function getUser() {
  try {
    return JSON.parse(localStorage.getItem('cyrflo_user'));
  } catch {
    return null;
  }
}
// ── Déconnexion complète ──
function logout() {
  clearToken();
  // Recharge la page pour réinitialiser l'état de l'interface
  window.location.reload();
}
// ── Vérification si le token JWT est expiré ──
function isTokenExpired(token) {
  try {
    // Le token JWT contient 3 parties séparées par des points
    // La 2ème partie contient les données (payload) encodées en base64
    const payload = JSON.parse(atob(token.split('.')[1]));
    // exp est en secondes, Date.now() en millisecondes
    return payload.exp * 1000 < Date.now();
  } catch {
    return true; // Si on ne peut pas lire le token, on le considère expiré
  }
}
// ── Fonction utilitaire pour appeler l'API ──
async function apiRequest(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  // Vérifier si le token est expiré AVANT d'envoyer la requête
  const token = getToken();
  if (token) {
    if (isTokenExpired(token)) {
      console.warn('⚠️ Token expiré — déconnexion automatique.');
      logout();
      throw new Error('Votre session a expiré. Veuillez vous reconnecter.');
    }
    headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });
  // Si le serveur renvoie 401 :
  //  - On ne déconnecte (et recharge) QUE si un token existait déjà
  //    => c'est une vraie session expirée/invalide.
  //  - Sinon (ex: tentative de connexion sans token avec de mauvais
  //    identifiants), on laisse passer le message d'erreur du serveur.
  if (response.status === 401 && token) {
    console.warn('⚠️ Session invalide — déconnexion automatique.');
    logout();
    throw new Error('Votre session a expiré. Veuillez vous reconnecter.');
  }
  const data = await response.json();
  // Si l'API renvoie une autre erreur (4xx/5xx), on la propage
  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue.');
  }
  return data;
}
console.log('✅ api.js chargé — connexion à', API_URL);
