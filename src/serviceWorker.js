/**
 * Verifica se o ambiente está em localhost.
 * @returns {boolean} True se o ambiente for localhost, caso contrário, False.
 */
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

/**
 * Registra o Service Worker, se o navegador suportar e o ambiente for de produção.
 * @param {object} config - Configurações opcionais para o registro do Service Worker.
 */
export function register(config) {
  // Código de registro do Service Worker
}

/**
 * Desregistra o Service Worker, se estiver registrado.
 */
export function unregister() {
  // Código de desregistro do Service Worker
}
