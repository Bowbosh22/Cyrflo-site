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
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}
// ── Fonction utilitaire pour appeler l'API ──
async function apiRequest(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Les routes de connexion/inscription ne doivent JAMAIS declencher
  // une deconnexion automatique : un 401 y signifie "identifiants incorrects".
  const isAuthEndpoint =
    endpoint.includes('/auth/login') || endpoint.includes('/auth/register');

  const token = getToken();

  // Pour les routes protegees, on verifie l'expiration AVANT l'envoi.
  // Pour login/register, on n'attache pas de token (connexion a neuf).
  if (token && !isAuthEndpoint) {
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

  // 401 sur une route protegee = vraie session invalide -> deconnexion.
  // 401 sur login/register = mauvais identifiants -> on laisse passer le message.
  if (response.status === 401 && !isAuthEndpoint) {
    console.warn('⚠️ Session invalide — déconnexion automatique.');
    logout();
    throw new Error('Votre session a expiré. Veuillez vous reconnecter.');
  }

  const data = await response.json();

  // Toute autre erreur (4xx/5xx) : on propage le message du serveur.
  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue.');
  }
  return data;
}
console.log('✅ api.js chargé — connexion à', API_URL);
