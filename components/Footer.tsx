"use client";
import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contatti" style={{ background: "var(--dark)", color: "rgba(255,255,255,0.7)" }} role="contentinfo">
      <div className="gold-line" aria-hidden="true" />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "56px", marginBottom: "64px" }}>
          {/* Brand col */}
          <div>
            <div className="font-display" style={{ fontSize: "1.6rem", fontWeight: 700, color: "white", marginBottom: "4px" }}>
              A SERVICE SRLS
            </div>
            <div style={{ fontSize: "11px", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              Milano · Pulizia & Manutenzione
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "320px" }}>
              Servizi professionali di pulizia e manutenzione per aziende e privati a Milano. Personale qualificato e interventi su misura.
            </p>

            {/* Contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "28px" }}>
              <a href="mailto:aservicesrls1@gmail.com" style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}>
                <Mail size={15} aria-hidden="true" style={{ color: "var(--accent)" }} />
                aservicesrls1@gmail.com
              </a>
              <a href="tel:+393351446503" style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}>
                <Phone size={15} aria-hidden="true" style={{ color: "var(--accent)" }} />
                +39 335 144 6503
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px" }}>
                <MapPin size={15} aria-hidden="true" style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.55)" }}>Via Spadolini 7 Palazzo B, Milano</span>
              </div>
            </div>
          </div>

          {/* Servizi col */}
          <nav aria-label="Link ai servizi">
            <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>
              Servizi
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Pulizie Continuative", "Pulizie Straordinarie", "Piccole Manutenzioni", "Trattamenti Parquet"].map(s => (
                <li key={s}>
                  <a href="#servizi" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Azienda col */}
          <nav aria-label="Link azienda">
            <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>
              Azienda
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Chi Siamo", href: "#chi-siamo" },
                { label: "Prezzi", href: "#prezzi" },
                { label: "Preventivo", href: "#preventivo" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/a-servicesrls" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"}>
                    {l.label}
                    {l.href.startsWith("http") && <ExternalLink size={12} aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © 2024 A SERVICE SRLS — P.IVA e CF in fase di registrazione ·{" "}
            <a href="#" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</a>
            {" "}·{" "}
            <a href="#" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Termini e Condizioni</a>
          </p>

          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Torna in cima alla pagina"
            style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)", padding: "8px 16px", borderRadius: "2px", cursor: "pointer", fontSize: "12px", letterSpacing: "0.08em", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}>
            <ArrowUp size={14} aria-hidden="true" /> Torna su
          </button>
        </div>
      </div>
    </footer>
  );
}
