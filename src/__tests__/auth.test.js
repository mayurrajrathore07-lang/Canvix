import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { createSession, validateSession, verifyPassword } from "@/lib/auth";

describe("Auth Library (src/lib/auth.js)", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv, ADMIN_SESSION_SECRET: "test-secret-key-12345" };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("Security Check", () => {
    it("should throw an error if no ADMIN_SESSION_SECRET or ADMIN_PASSWORD is set", async () => {
      delete process.env.ADMIN_SESSION_SECRET;
      delete process.env.ADMIN_PASSWORD;

      await expect(createSession()).rejects.toThrow("Server configuration error");
    });
  });

  describe("createSession & validateSession", () => {
    it("should create a valid signed session token and validate it successfully", async () => {
      const token = await createSession();
      expect(token).toBeTypeOf("string");
      expect(token.split(".").length).toBe(3);

      const isValid = await validateSession(token);
      expect(isValid).toBe(true);
    });

    it("should return false for invalid or tampered tokens", async () => {
      const token = await createSession();
      const parts = token.split(".");
      const tamperedToken = `${parts[0]}.${parts[1]}.tamperedSignature123`;

      const isValid = await validateSession(tamperedToken);
      expect(isValid).toBe(false);
    });

    it("should return false for empty or null tokens", async () => {
      expect(await validateSession("")).toBe(false);
      expect(await validateSession(null)).toBe(false);
      expect(await validateSession(undefined)).toBe(false);
    });
  });

  describe("verifyPassword", () => {
    it("should return true for matching passwords", async () => {
      const isMatch = await verifyPassword("correct-password", "correct-password");
      expect(isMatch).toBe(true);
    });

    it("should return false for non-matching passwords", async () => {
      const isMatch = await verifyPassword("wrong-password", "correct-password");
      expect(isMatch).toBe(false);
    });

    it("should return false if input or expected password is missing", async () => {
      expect(await verifyPassword("", "password")).toBe(false);
      expect(await verifyPassword("password", "")).toBe(false);
    });
  });
});
