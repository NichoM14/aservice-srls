"use client";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }} aria-label="Sezione principale">
      {/* Decorative lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)" }} aria-hidden="true" />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }} aria-hidden="true" />

      {/* Geometric decoration */}
      <div aria-hidden="true" style={{
        position: "absolute", right: "8%", top: "20%",
        width: "320px", height: "320px", border: "1px solid rgba(200,169,110,0.1)",
        borderRadius: "50%", pointerEvents: "none"
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", right: "12%", top: "25%",
        width: "200px", height: "200px", border: "1px solid rgba(200,169,110,0.15)",
        borderRadius: "50%", pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <div style={{ maxWidth: "700px" }}>
          {/* Badge */}
          <div className="animate-fadeUp" style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "flex", gap: "2px" }} aria-label="5 stelle di valutazione">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />
              ))}
            </div>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
              Servizio affidabile dal 2023
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display animate-fadeUp anim-delay-1" style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700,
            color: "white", lineHeight: 1.1, marginBottom: "24px",
            letterSpacing: "-0.01em"
          }}>
            Pulizia e<br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>manutenzione</span><br />
            professionale
          </h1>

          <p className="animate-fadeUp anim-delay-2" style={{
            fontSize: "1.15rem", color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7, marginBottom: "48px", maxWidth: "520px"
          }}>
            Servizi su misura per aziende, condomini e privati a <strong style={{ color: "rgba(255,255,255,0.9)" }}>Milano</strong>.
            Personale qualificato, interventi programmati e massima attenzione alla qualità.
          </p>

          {/* CTAs */}
          <div className="animate-fadeUp anim-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "64px" }}>
            <a href="#preventivo" className="btn-primary" style={{ fontSize: "14px" }}>
              Richiedi Preventivo <ArrowRight size={16} />
            </a>
            <a href="#servizi" className="btn-outline" style={{ fontSize: "14px" }}>
              Scopri i Servizi
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fadeUp anim-delay-4" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px",
            maxWidth: "480px"
          }}>
            {[
              { value: "4+", label: "Servizi offerti" },
              { value: "100%", label: "Soddisfazione" },
              { value: "Milano", label: "Area servita" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--accent)" }}>{s.value}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#servizi" aria-label="Scorri verso i servizi" style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "11px",
        letterSpacing: "0.1em", textTransform: "uppercase"
      }}>
        <span>Scorri</span>
        <ChevronDown size={18} className="animate-float" />
      </a>
    </section>
  );
}
