// Session TTL: 8 hours
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

/**
 * Get secret key for signing sessions.
 */
function getSecretKey() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "canvix-default-admin-session-secret-key-2024"
  );
}

/**
 * Web Crypto HMAC-SHA256 signature generator.
 */
async function signHmac(secret, payload) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const key = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload)
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Create a signed stateless session token.
 * Format: `<expiresAt>.<nonce>.<hmacSignature>`
 * @returns {Promise<string>} Signed session token
 */
export async function createSession() {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const nonce = Array.from(randomBytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const payload = `${expiresAt}.${nonce}`;
  const signature = await signHmac(getSecretKey(), payload);

  return `${payload}.${signature}`;
}

/**
 * Validate a signed session token.
 * @param {string} token
 * @returns {Promise<boolean>}
 */
export async function validateSession(token) {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [expiresAtStr, nonce, signature] = parts;
  const expiresAt = parseInt(expiresAtStr, 10);

  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  const payload = `${expiresAtStr}.${nonce}`;
  const expectedSignature = await signHmac(getSecretKey(), payload);

  if (signature.length !== expectedSignature.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < signature.length; i++) {
    mismatch |= signature.charCodeAt(i) ^ expectedSignature.charCodeAt(i);
  }

  return mismatch === 0;
}

/**
 * Destroy a session token (noop for stateless cookies; clearing cookie invalidates it).
 * @param {string} token
 */
export function destroySession(token) {
  // Stateless token is invalidated when client clears the cookie
}

/**
 * Timing-safe password comparison.
 * @param {string} input
 * @param {string} expected
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(input, expected) {
  if (!input || !expected) return false;

  const encoder = new TextEncoder();
  const inputBuf = encoder.encode(input);
  const expectedBuf = encoder.encode(expected);

  if (inputBuf.length !== expectedBuf.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < inputBuf.length; i++) {
    mismatch |= inputBuf[i] ^ expectedBuf[i];
  }

  return mismatch === 0;
}
