"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaUser, FaCalendarAlt, FaTrash, FaSearch, FaInbox } from "react-icons/fa";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function Badge({ count }) {
  return (
    <span style={{
      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      color: "#fff",
      borderRadius: "999px",
      padding: "2px 12px",
      fontSize: "13px",
      fontWeight: 700,
      marginLeft: "10px",
    }}>
      {count}
    </span>
  );
}

function MessageCard({ msg, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{
        background: expanded ? "rgba(6,182,212,0.06)" : "rgba(255,255,255,0.03)",
        border: expanded ? "1px solid rgba(6,182,212,0.4)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "20px 24px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        marginBottom: "12px",
        animationDelay: `${index * 0.05}s`,
      }}
      onMouseEnter={e => {
        if (!expanded) e.currentTarget.style.border = "1px solid rgba(6,182,212,0.25)";
      }}
      onMouseLeave={e => {
        if (!expanded) e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
      }}
    >
      {/* Header Row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "42px", height: "42px", borderRadius: "50%",
            background: "linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px", fontWeight: 700, color: "#fff", flexShrink: 0,
          }}>
            {msg.first_name?.[0]?.toUpperCase()}
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#fff", fontSize: "15px", margin: 0 }}>
              {msg.first_name} {msg.last_name}
            </p>
            <p style={{ color: "#06b6d4", fontSize: "13px", margin: 0 }}>{msg.email}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "12px" }}>
          <FaCalendarAlt size={11} />
          <span>{formatDate(msg.created_at)}</span>
        </div>
      </div>

      {/* Message Preview */}
      <p style={{
        marginTop: "12px",
        color: expanded ? "#d1d5db" : "#9ca3af",
        fontSize: "14px",
        lineHeight: "1.6",
        display: expanded ? "block" : "-webkit-box",
        WebkitLineClamp: expanded ? "unset" : 2,
        WebkitBoxOrient: "vertical",
        overflow: expanded ? "visible" : "hidden",
        transition: "color 0.2s",
      }}>
        {msg.message}
      </p>

      {/* Expanded Details */}
      {expanded && (
        <div style={{
          marginTop: "16px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex", flexWrap: "wrap", gap: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#9ca3af", fontSize: "13px" }}>
            <FaEnvelope size={12} style={{ color: "#06b6d4" }} />
            <span>{msg.email}</span>
          </div>
          {msg.phone && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#9ca3af", fontSize: "13px" }}>
              <FaPhone size={12} style={{ color: "#06b6d4" }} />
              <span>{msg.phone}</span>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#9ca3af", fontSize: "13px" }}>
            <span style={{
              background: "rgba(6,182,212,0.15)", color: "#06b6d4",
              borderRadius: "6px", padding: "2px 8px", fontSize: "11px", fontWeight: 600,
            }}>
              ID #{msg.id}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard({ messages }) {
  const [search, setSearch] = useState("");

  const filtered = messages.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.first_name?.toLowerCase().includes(q) ||
      m.last_name?.toLowerCase().includes(q) ||
      m.email?.toLowerCase().includes(q) ||
      m.message?.toLowerCase().includes(q)
    );
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at top left, rgba(6,182,212,0.12) 0%, #050508 40%, #050508 100%)",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      padding: "0",
    }}>
      {/* Top bar */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(12px)",
        padding: "18px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "8px",
            background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <FaInbox size={14} color="#fff" />
          </div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.3px" }}>
            Canvix Admin
          </span>
        </div>
        <span style={{ color: "#6b7280", fontSize: "13px" }}>Contact Messages</span>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Heading */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 8px",
            letterSpacing: "-0.8px",
          }}>
            Contact Messages
            <Badge count={messages.length} />
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
            All form submissions stored in your Neon database — live, real-time.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "32px" }}>
          {[
            { label: "Total Messages", value: messages.length, icon: <FaEnvelope size={14} /> },
            { label: "Today", value: messages.filter(m => new Date(m.created_at).toDateString() === new Date().toDateString()).length, icon: <FaCalendarAlt size={14} /> },
            { label: "Unique Emails", value: new Set(messages.map(m => m.email)).size, icon: <FaUser size={14} /> },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "18px 20px",
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <div style={{ color: "#06b6d4" }}>{stat.icon}</div>
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "22px", margin: 0, lineHeight: 1 }}>{stat.value}</p>
                <p style={{ color: "#6b7280", fontSize: "12px", margin: "4px 0 0" }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{
          position: "relative", marginBottom: "24px",
        }}>
          <FaSearch size={14} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#6b7280" }} />
          <input
            type="text"
            placeholder="Search by name, email, or message..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "12px 16px 12px 42px",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
              transition: "border 0.2s",
            }}
            onFocus={e => e.target.style.border = "1px solid rgba(6,182,212,0.5)"}
            onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.1)"}
          />
        </div>

        {/* Messages List */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "60px 20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
          }}>
            <FaInbox size={36} style={{ color: "#374151", marginBottom: "12px" }} />
            <p style={{ color: "#6b7280", fontSize: "15px", margin: 0 }}>
              {search ? "No messages match your search." : "No messages yet. Check back after someone fills your contact form!"}
            </p>
          </div>
        ) : (
          <div>
            {filtered.map((msg, i) => (
              <MessageCard key={msg.id} msg={msg} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
