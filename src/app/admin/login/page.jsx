"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaShieldAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Incorrect password.");
        setShake(true);
        setTimeout(() => setShake(false), 600);
        setPassword("");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(124,58,237,0.5); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(124,58,237,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(124,58,237,0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(30px,-20px) scale(1.08); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(-20px,30px) scale(0.95); }
        }
        .login-card {
          animation: fadeIn 0.5s cubic-bezier(.34,1.56,.64,1);
        }
        .shake {
          animation: shake 0.5s ease;
        }
        .icon-ring {
          animation: pulse-ring 2.5s ease-in-out infinite;
        }
        .float {
          animation: float 4s ease-in-out infinite;
        }
        .login-input:focus {
          border-color: rgba(124,58,237,0.7) !important;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.15) !important;
          outline: none;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(124,58,237,0.5) !important;
        }
        .login-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .login-btn {
          transition: all 0.2s ease;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(124,58,237,0.22) 0%, #070510 55%)",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            animation: "orb1 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "8%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
            animation: "orb2 10s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Card */}
        <div
          className={`login-card ${shake ? "shake" : ""}`}
          style={{
            background: "rgba(13,10,26,0.85)",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: "28px",
            padding: "48px 44px",
            width: "100%",
            maxWidth: "420px",
            boxShadow:
              "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div
              className="icon-ring float"
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "22px",
                background: "linear-gradient(135deg,#7c3aed 0%,#06b6d4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <FaShieldAlt size={28} color="#fff" />
            </div>
            <h1
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "26px",
                letterSpacing: "-0.6px",
                margin: "0 0 8px",
              }}
            >
              Canvix{" "}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>Admin</span>
            </h1>
            <p style={{ color: "#6b7280", fontSize: "14px", fontWeight: 500 }}>
              Enter your password to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Password Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="admin-password"
                style={{
                  display: "block",
                  color: "#9ca3af",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "8px",
                  letterSpacing: "0.03em",
                }}
              >
                PASSWORD
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6b7280",
                    pointerEvents: "none",
                  }}
                >
                  <FaLock size={14} />
                </div>
                <input
                  id="admin-password"
                  className="login-input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    padding: "13px 48px 13px 42px",
                    color: "#fff",
                    fontSize: "15px",
                    fontFamily: "inherit",
                    transition: "border 0.2s, box-shadow 0.2s",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b7280",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#9ca3af")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
                >
                  {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  marginBottom: "20px",
                  color: "#fca5a5",
                  fontSize: "13px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "16px" }}>⚠️</span>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              id="admin-login-btn"
              type="submit"
              disabled={loading || !password}
              className="login-btn"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                border: "none",
                background:
                  loading || !password
                    ? "rgba(124,58,237,0.4)"
                    : "linear-gradient(135deg,#7c3aed 0%,#6d28d9 100%)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 700,
                cursor: loading || !password ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.01em",
                boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {loading ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  >
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                    <path
                      d="M12 2 A10 10 0 0 1 22 12"
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Verifying…
                </>
              ) : (
                <>
                  <FaShieldAlt size={15} />
                  Access Dashboard
                </>
              )}
            </button>
          </form>

          {/* Footer hint */}
          <p
            style={{
              color: "#374151",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "28px",
              fontWeight: 500,
            }}
          >
            Protected area · Canvix Admin Panel
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
