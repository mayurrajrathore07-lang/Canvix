import crypto from "crypto";

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
 * Create a signed stateless session token.
 * Format: `<expiresAt>.<nonce>.<hmacSignature>`
 * @returns {string} Signed session token
 */
export function createSession() {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const nonce = crypto.randomBytes(16).toString("hex");
  const payload = `${expiresAt}.${nonce}`;

  const hmac = crypto
    .createHmac("sha256", getSecretKey())
    .update(payload)
    .digest("hex");

  return `${payload}.${hmac}`;
}

/**
 * Validate a signed session token.
 * @param {string} token
 * @returns {boolean}
 */
export function validateSession(token) {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [expiresAtStr, nonce, signature] = parts;
  const expiresAt = parseInt(expiresAtStr, 10);

  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  const payload = `${expiresAtStr}.${nonce}`;
  const expectedHmac = crypto
    .createHmac("sha256", getSecretKey())
    .update(payload)
    .digest("hex");

  try {
    const signatureBuf = Buffer.from(signature, "hex");
    const expectedBuf = Buffer.from(expectedHmac, "hex");

    if (signatureBuf.length !== expectedBuf.length) {
      return false;
    }

    return crypto.timingSafeEqual(signatureBuf, expectedBuf);
  } catch (err) {
    return false;
  }
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
 * @returns {boolean}
 */
export function verifyPassword(input, expected) {
  if (!input || !expected) return false;

  const inputBuf = Buffer.from(input);
  const expectedBuf = Buffer.from(expected);

  if (inputBuf.length !== expectedBuf.length) {
    crypto.timingSafeEqual(expectedBuf, expectedBuf);
    return false;
  }

  return crypto.timingSafeEqual(inputBuf, expectedBuf);
}

