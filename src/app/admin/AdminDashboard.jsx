"use client";

import { useState, useCallback } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCalendarAlt,
  FaTrash,
  FaSearch,
  FaInbox,
  FaShieldAlt,
  FaTable,
  FaTh,
  FaCheckSquare,
  FaSquare,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

/* ─────────────────── helpers ─────────────────── */
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

function avatar(name) {
  return (name || "?")[0].toUpperCase();
}

const GRADIENT = "linear-gradient(135deg,#7c3aed 0%,#06b6d4 100%)";
const ACCENT = "#7c3aed";
const ACCENT2 = "#06b6d4";

/* ─────────────────── Confirm Modal ─────────────────── */
function ConfirmModal({ count, onConfirm, onCancel, loading }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "#13111c",
          border: "1px solid rgba(124,58,237,0.35)",
          borderRadius: "20px",
          padding: "36px",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1)",
          textAlign: "center",
          animation: "popIn 0.25s cubic-bezier(.34,1.56,.64,1)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(239,68,68,0.12)",
            border: "1px solid rgba(239,68,68,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <FaExclamationTriangle size={24} color="#ef4444" />
        </div>
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "20px", margin: "0 0 10px" }}>
          Delete {count > 1 ? `${count} messages` : "message"}?
        </h3>
        <p style={{ color: "#9ca3af", fontSize: "14px", margin: "0 0 28px", lineHeight: 1.6 }}>
          This action cannot be undone. The selected{" "}
          {count > 1 ? "messages" : "message"} will be permanently removed from the database.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onCancel}
            disabled={loading}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "#d1d5db",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: loading ? "rgba(239,68,68,0.4)" : "#ef4444",
              color: "#fff",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: 700,
              transition: "all 0.2s",
            }}
          >
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Card view item ─────────────────── */
function MessageCard({ msg, selected, onToggle, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: selected
          ? "rgba(124,58,237,0.09)"
          : expanded
          ? "rgba(6,182,212,0.05)"
          : "rgba(255,255,255,0.025)",
        border: selected
          ? "1px solid rgba(124,58,237,0.4)"
          : expanded
          ? "1px solid rgba(6,182,212,0.3)"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        padding: "18px 20px",
        marginBottom: "10px",
        transition: "all 0.22s",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => onToggle(msg.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            color: selected ? ACCENT : "#4b5563",
            flexShrink: 0,
            transition: "color 0.2s",
          }}
        >
          {selected ? <FaCheckSquare size={18} /> : <FaSquare size={18} />}
        </button>

        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: GRADIENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "15px",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {avatar(msg.first_name)}
        </div>

        <div
          style={{ flex: 1, cursor: "pointer", minWidth: 0 }}
          onClick={() => setExpanded(!expanded)}
        >
          <p style={{ fontWeight: 700, color: "#fff", fontSize: "15px", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {msg.first_name} {msg.last_name}
          </p>
          <p style={{ color: ACCENT2, fontSize: "12px", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {msg.email}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#4b5563", fontSize: "11px", flexShrink: 0 }}>
          <FaCalendarAlt size={10} />
          <span>{formatDate(msg.created_at)}</span>
        </div>

        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          <button
            onClick={() => setExpanded(!expanded)}
            title={expanded ? "Collapse" : "Expand"}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#9ca3af",
              transition: "all 0.2s",
            }}
          >
            {expanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
          </button>
          <button
            onClick={() => onDelete([msg.id])}
            title="Delete"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ef4444",
              transition: "all 0.2s",
            }}
          >
            <FaTrash size={12} />
          </button>
        </div>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p
            style={{
              color: "#d1d5db",
              fontSize: "14px",
              lineHeight: "1.7",
              margin: "0 0 16px",
              paddingLeft: "52px",
            }}
          >
            {msg.message}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingLeft: "52px" }}>
            <Chip icon={<FaEnvelope size={10} />} label={msg.email} />
            {msg.phone && <Chip icon={<FaPhone size={10} />} label={msg.phone} />}
            <Chip icon={<span style={{ fontSize: "10px", fontWeight: 800 }}>#</span>} label={`ID ${msg.id}`} />
          </div>
        </div>
      )}
    </div>
  );
}

function Chip({ icon, label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: "8px",
        padding: "4px 10px",
        fontSize: "12px",
        color: "#c4b5fd",
      }}
    >
      {icon}
      {label}
    </span>
  );
}

/* ─────────────────── Table Row ─────────────────── */
function TableRow({ msg, selected, onToggle, onDelete }) {
  return (
    <tr
      style={{
        background: selected ? "rgba(124,58,237,0.09)" : "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.2s",
      }}
    >
      <td style={{ padding: "14px 16px", width: "40px" }}>
        <button
          onClick={() => onToggle(msg.id)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: selected ? ACCENT : "#4b5563", display: "flex" }}
        >
          {selected ? <FaCheckSquare size={16} /> : <FaSquare size={16} />}
        </button>
      </td>
      <td style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "9px",
              background: GRADIENT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "13px",
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {avatar(msg.first_name)}
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "#fff", fontSize: "13px", margin: 0 }}>
              {msg.first_name} {msg.last_name}
            </p>
            <p style={{ color: "#6b7280", fontSize: "11px", margin: 0 }}>{msg.email}</p>
          </div>
        </div>
      </td>
      <td style={{ padding: "14px 16px", color: "#9ca3af", fontSize: "13px" }}>
        {msg.phone || <span style={{ color: "#374151" }}>—</span>}
      </td>
      <td style={{ padding: "14px 16px", maxWidth: "280px" }}>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "13px",
            margin: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "260px",
          }}
        >
          {msg.message}
        </p>
      </td>
      <td style={{ padding: "14px 16px", color: "#6b7280", fontSize: "12px", whiteSpace: "nowrap" }}>
        {formatDate(msg.created_at)}
      </td>
      <td style={{ padding: "14px 16px" }}>
        <button
          onClick={() => onDelete([msg.id])}
          title="Delete"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "8px",
            padding: "6px 10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
            color: "#ef4444",
            fontSize: "12px",
            fontWeight: 600,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.18)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.08)"; }}
        >
          <FaTrash size={11} /> Delete
        </button>
      </td>
    </tr>
  );
}

/* ─────────────────── Stat Card ─────────────────── */
function StatCard({ label, value, icon, color }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "18px",
        padding: "22px 24px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition: "border 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(124,58,237,0.07)";
        e.currentTarget.style.border = `1px solid ${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
      }}
    >
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "14px",
          background: `${color}18`,
          border: `1px solid ${color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <p style={{ color: "#fff", fontWeight: 800, fontSize: "26px", margin: 0, letterSpacing: "-0.5px", lineHeight: 1 }}>
          {value}
        </p>
        <p style={{ color: "#6b7280", fontSize: "12px", margin: "5px 0 0", fontWeight: 500 }}>{label}</p>
      </div>
    </div>
  );
}

/* ─────────────────── Main Dashboard ─────────────────── */
export default function AdminDashboard({ messages: initialMessages }) {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("card");
  const [selected, setSelected] = useState(new Set());
  const [confirmIds, setConfirmIds] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  const filtered = messages.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.first_name?.toLowerCase().includes(q) ||
      m.last_name?.toLowerCase().includes(q) ||
      m.email?.toLowerCase().includes(q) ||
      m.message?.toLowerCase().includes(q)
    );
  });

  const toggleSelect = useCallback((id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const allSelected = filtered.length > 0 && filtered.every((m) => selected.has(m.id));
  const toggleAll = () => {
    if (allSelected) {
      setSelected((prev) => {
        const next = new Set(prev);
        filtered.forEach((m) => next.delete(m.id));
        return next;
      });
    } else {
      setSelected((prev) => {
        const next = new Set(prev);
        filtered.forEach((m) => next.add(m.id));
        return next;
      });
    }
  };

  const showToast = (text, type = "success") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 3000);
  };

  const requestDelete = (ids) => setConfirmIds(ids);

  const handleDeleteConfirm = async () => {
    if (!confirmIds || confirmIds.length === 0) return;
    setDeleting(true);
    try {
      await Promise.all(
        confirmIds.map((id) =>
          fetch(`/api/messages?id=${id}`, { method: "DELETE" })
        )
      );
      setMessages((prev) => prev.filter((m) => !confirmIds.includes(m.id)));
      setSelected((prev) => {
        const next = new Set(prev);
        confirmIds.forEach((id) => next.delete(id));
        return next;
      });
      showToast(`${confirmIds.length > 1 ? `${confirmIds.length} messages` : "Message"} deleted successfully.`);
    } catch {
      showToast("Failed to delete. Please try again.", "error");
    } finally {
      setDeleting(false);
      setConfirmIds(null);
    }
  };

  const selectedArray = Array.from(selected);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.88) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.35); border-radius: 9px; }
      `}</style>

      {confirmIds && (
        <ConfirmModal
          count={confirmIds.length}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setConfirmIds(null)}
          loading={deleting}
        />
      )}

      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            background: toast.type === "error" ? "#7f1d1d" : "#134e26",
            border: `1px solid ${toast.type === "error" ? "rgba(239,68,68,0.4)" : "rgba(34,197,94,0.4)"}`,
            color: toast.type === "error" ? "#fca5a5" : "#86efac",
            borderRadius: "14px",
            padding: "14px 20px",
            fontSize: "14px",
            fontWeight: 600,
            zIndex: 999,
            boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            animation: "slideInRight 0.35s ease",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {toast.text}
          <button
            onClick={() => setToast(null)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0, opacity: 0.7 }}
          >
            <FaTimes size={12} />
          </button>
        </div>
      )}

      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.18) 0%, #080611 60%)",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          color: "#fff",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(5,4,15,0.85)",
            backdropFilter: "blur(16px)",
            padding: "0 32px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: GRADIENT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaShieldAlt size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: "16px", letterSpacing: "-0.4px" }}>
              Canvix <span style={{ color: "#7c3aed", fontWeight: 600 }}>Admin</span>
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {selected.size > 0 && (
              <button
                onClick={() => requestDelete(selectedArray)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: "10px",
                  padding: "7px 14px",
                  color: "#ef4444",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  animation: "fadeUp 0.25s ease",
                  fontFamily: "inherit",
                }}
              >
                <FaTrash size={11} />
                Delete {selected.size} selected
              </button>
            )}
            <span
              style={{
                background: "rgba(124,58,237,0.18)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#c4b5fd",
                borderRadius: "999px",
                padding: "4px 14px",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              {messages.length} messages
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>

          {/* Heading */}
          <div style={{ marginBottom: "36px", animation: "fadeUp 0.4s ease" }}>
            <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, margin: "0 0 6px", letterSpacing: "-0.8px" }}>
              Contact Messages
            </h1>
            <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
              Manage all form submissions — view, search, and delete entries.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
              marginBottom: "36px",
              animation: "fadeUp 0.45s ease",
            }}
          >
            <StatCard label="Total Messages" value={messages.length} icon={<FaEnvelope size={16} />} color="#7c3aed" />
            <StatCard
              label="Today"
              value={messages.filter((m) => new Date(m.created_at).toDateString() === new Date().toDateString()).length}
              icon={<FaCalendarAlt size={16} />}
              color="#06b6d4"
            />
            <StatCard
              label="Unique Senders"
              value={new Set(messages.map((m) => m.email)).size}
              icon={<FaUser size={16} />}
              color="#f59e0b"
            />
            <StatCard
              label="With Phone"
              value={messages.filter((m) => m.phone).length}
              icon={<FaPhone size={16} />}
              color="#10b981"
            />
          </div>

          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
              flexWrap: "wrap",
              animation: "fadeUp 0.5s ease",
            }}
          >
            <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
              <FaSearch
                size={13}
                style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#6b7280" }}
              />
              <input
                type="text"
                placeholder="Search by name, email, or message…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "11px 16px 11px 40px",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border 0.2s",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.border = `1px solid ${ACCENT}80`)}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
              />
            </div>

            <div
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "12px",
                padding: "3px",
                gap: "3px",
              }}
            >
              {[
                { mode: "card", icon: <FaTh size={14} />, title: "Card view" },
                { mode: "table", icon: <FaTable size={14} />, title: "Table view" },
              ].map(({ mode, icon, title }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  title={title}
                  style={{
                    background: viewMode === mode ? ACCENT : "transparent",
                    border: "none",
                    borderRadius: "9px",
                    padding: "8px 14px",
                    cursor: "pointer",
                    color: viewMode === mode ? "#fff" : "#6b7280",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>

            {filtered.length > 0 && (
              <button
                onClick={toggleAll}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  color: allSelected ? "#c4b5fd" : "#9ca3af",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >
                {allSelected ? <FaCheckSquare size={14} color={ACCENT} /> : <FaSquare size={14} />}
                {allSelected ? "Deselect all" : "Select all"}
              </button>
            )}
          </div>

          {/* Content */}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                animation: "fadeUp 0.4s ease",
              }}
            >
              <FaInbox size={40} style={{ color: "#374151", marginBottom: "16px" }} />
              <p style={{ color: "#6b7280", fontSize: "16px", margin: 0 }}>
                {search ? "No messages match your search." : "No messages yet."}
              </p>
            </div>
          ) : viewMode === "card" ? (
            <div style={{ animation: "fadeUp 0.4s ease" }}>
              {filtered.map((msg) => (
                <MessageCard
                  key={msg.id}
                  msg={msg}
                  selected={selected.has(msg.id)}
                  onToggle={toggleSelect}
                  onDelete={requestDelete}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "18px",
                overflow: "hidden",
                animation: "fadeUp 0.4s ease",
              }}
            >
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{
                        background: "rgba(124,58,237,0.08)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <th style={{ padding: "14px 16px", width: "40px" }}>
                        <button
                          onClick={toggleAll}
                          style={{ background: "none", border: "none", cursor: "pointer", color: allSelected ? ACCENT : "#4b5563", display: "flex" }}
                        >
                          {allSelected ? <FaCheckSquare size={16} /> : <FaSquare size={16} />}
                        </button>
                      </th>
                      {["Sender", "Phone", "Message", "Date", "Action"].map((h) => (
                        <th
                          key={h}
                          style={{
                            padding: "14px 16px",
                            textAlign: "left",
                            color: "#6b7280",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((msg) => (
                      <TableRow
                        key={msg.id}
                        msg={msg}
                        selected={selected.has(msg.id)}
                        onToggle={toggleSelect}
                        onDelete={requestDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filtered.length > 0 && (
            <p style={{ color: "#4b5563", fontSize: "12px", marginTop: "20px", textAlign: "center" }}>
              Showing {filtered.length} of {messages.length} messages
              {selected.size > 0 && ` · ${selected.size} selected`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
