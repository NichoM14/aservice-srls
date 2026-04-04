"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#servizi", label: "Servizi" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setActive(href.replace("#", ""));
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigazione principale"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(26,26,24,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.2)" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
            {/* Logo */}
            <a href="#home" aria-label="A Service SRLS - Torna alla home" onClick={() => handleNav("#home")}
              style={{ display: "flex", flexDirection: "column", gap: "2px", textDecoration: "none" }}>
              <span className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", letterSpacing: "0.02em" }}>
                A SERVICE
              </span>
              <span style={{ fontSize: "10px", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 500 }}>
                SRLS · Milano
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex" style={{ gap: "32px", alignItems: "center" }}>
              {links.map(l => (
                <a key={l.href} href={l.href} className={`nav-link ${active === l.href.replace("#","") ? "active" : ""}`}
                  style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
                  onClick={() => handleNav(l.href)}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a href="#preventivo" className="btn-primary hidden md:inline-flex"
              style={{ padding: "10px 24px", fontSize: "13px" }}
              onClick={() => handleNav("#preventivo")}>
              Preventivo Gratuito
            </a>

            {/* Hamburger */}
            <button className="md:hidden" onClick={() => setOpen(!open)}
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-expanded={open}
              style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "8px" }}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "rgba(26,26,24,0.99)", borderTop: "1px solid rgba(200,169,110,0.2)",
            padding: "24px"
          }} role="dialog" aria-modal="true" aria-label="Menu mobile">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => handleNav(l.href)}
                  style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "16px", fontWeight: 500 }}>
                  {l.label}
                </a>
              ))}
              <a href="#preventivo" className="btn-primary" style={{ marginTop: "8px", justifyContent: "center" }}
                onClick={() => handleNav("#preventivo")}>
                Preventivo Gratuito
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
