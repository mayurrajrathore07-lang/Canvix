/**
 * Server-side session management for admin authentication.
 * Uses an in-memory Map to store session tokens.
 * In production, consider using Redis or a database.
 */
import crypto from "crypto";

// In-memory session store: Map<sessionToken, { createdAt: number }>
const sessions = new Map();

// Session TTL: 8 hours
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

/**
 * Create a new session token.
 * @returns {string} A random session token
 */
export function createSession() {
  // Clean up expired sessions occasionally
  cleanupSessions();

  const token = crypto.randomUUID();
  sessions.set(token, { createdAt: Date.now() });
  return token;
}

/**
 * Validate a session token.
 * @param {string} token
 * @returns {boolean}
 */
export function validateSession(token) {
  if (!token) return false;
  const session = sessions.get(token);
  if (!session) return false;

  if (Date.now() - session.createdAt > SESSION_TTL_MS) {
    sessions.delete(token);
    return false;
  }

  return true;
}

/**
 * Destroy a session token.
 * @param {string} token
 */
export function destroySession(token) {
  if (token) sessions.delete(token);
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
    // Still perform a comparison to prevent timing leaks on length
    crypto.timingSafeEqual(expectedBuf, expectedBuf);
    return false;
  }

  return crypto.timingSafeEqual(inputBuf, expectedBuf);
}

/**
 * Clean up expired sessions from memory.
 */
function cleanupSessions() {
  const now = Date.now();
  for (const [token, session] of sessions.entries()) {
    if (now - session.createdAt > SESSION_TTL_MS) {
      sessions.delete(token);
    }
  }
}
