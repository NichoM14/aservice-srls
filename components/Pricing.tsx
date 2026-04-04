"use client";
import { Check, ArrowRight } from "lucide-react";

const piani = [
  {
    nome: "Piccole Manutenzioni",
    prezzo: "€49",
    unita: "a intervento",
    descrizione: "Ideale per singoli interventi tecnici rapidi",
    features: [
      "Regolazione finestre e tapparelle",
      "Riparazione porte e maniglie",
      "Piccoli interventi sanitari",
      "Controlli funzionali",
      "Referente dedicato",
    ],
    cta: "Prenota Intervento",
    highlight: false,
    badge: null,
  },
  {
    nome: "Pulizie Continuative",
    prezzo: "Su misura",
    unita: "preventivo gratuito",
    descrizione: "Per aziende, uffici e condomini con necessità ricorrenti",
    features: [
      "Frequenza personalizzata",
      "Orari flessibili",
      "Personale qualificato e formato",
      "Supervisione costante",
      "Contratto continuativo",
      "Report qualità",
    ],
    cta: "Richiedi Preventivo",
    highlight: true,
    badge: "Più scelto",
  },
  {
    nome: "Trattamenti & Superfici",
    prezzo: "Da €15",
    unita: "al m²",
    descrizione: "Trattamenti specialistici per pavimenti e superfici delicate",
    features: [
      "Posa parquet",
      "Levigatura e lucidatura",
      "Ripristino superfici",
      "Materiali di qualità",
      "Sopralluogo gratuito",
    ],
    cta: "Richiedi Sopralluogo",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  const scrollToPreventivo = (servizio?: string) => {
    const el = document.getElementById("preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (servizio) {
      const sel = document.getElementById("servizio-select") as HTMLSelectElement;
      if (sel) sel.value = servizio;
    }
  };

  return (
    <section id="prezzi" className="section-padding" style={{ background: "var(--dark)", position: "relative" }} aria-label="Prezzi e piani">
      {/* Top line */}
      <div className="gold-line" aria-hidden="true" />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "16px", color: "var(--accent)" }}>
            Tariffe
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Prezzi Trasparenti
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
            Prezzi chiari senza sorprese. Ogni preventivo è gratuito e senza impegno.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "start" }}>
          {piani.map(p => (
            <div key={p.nome} style={{
              background: p.highlight ? "var(--accent)" : "var(--dark-card)",
              border: `1px solid ${p.highlight ? "var(--accent)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "4px", padding: "40px 32px",
              position: "relative", transition: "transform 0.3s ease",
            }}
              role="article"
              aria-label={`Piano ${p.nome}`}>
              {p.badge && (
                <div style={{
                  position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                  background: "white", color: "var(--accent)",
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "5px 16px", borderRadius: "2px",
                }}>
                  {p.badge}
                </div>
              )}

              <h3 className="font-display" style={{
                fontSize: "1.2rem", fontWeight: 600, marginBottom: "8px",
                color: p.highlight ? "white" : "rgba(255,255,255,0.9)"
              }}>
                {p.nome}
              </h3>
              <p style={{ fontSize: "13px", color: p.highlight ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)", marginBottom: "24px", lineHeight: 1.5 }}>
                {p.descrizione}
              </p>

              <div style={{ marginBottom: "32px" }}>
                <span className="font-display" style={{ fontSize: "2.5rem", fontWeight: 700, color: p.highlight ? "white" : "var(--accent)" }}>
                  {p.prezzo}
                </span>
                <span style={{ fontSize: "13px", color: p.highlight ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)", marginLeft: "6px" }}>
                  {p.unita}
                </span>
              </div>

              <ul style={{ listStyle: "none", marginBottom: "36px" }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                    <Check size={16} style={{ color: p.highlight ? "white" : "var(--accent)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                    <span style={{ fontSize: "14px", color: p.highlight ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToPreventivo(p.nome)}
                aria-label={`${p.cta} per ${p.nome}`}
                style={{
                  width: "100%", padding: "14px", borderRadius: "2px",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase",
                  cursor: "pointer", transition: "all 0.3s ease",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  background: p.highlight ? "white" : "transparent",
                  color: p.highlight ? "var(--accent)" : "rgba(255,255,255,0.7)",
                  border: p.highlight ? "none" : "1.5px solid rgba(255,255,255,0.25)",
                }}>
                {p.cta} <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", marginTop: "48px", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
          * Tutti i prezzi sono indicativi e IVA esclusa. Il preventivo definitivo viene fornito dopo sopralluogo o consultazione.
        </p>
      </div>

      <div className="gold-line" style={{ marginTop: "0", position: "absolute", bottom: 0, left: 0, right: 0 }} aria-hidden="true" />
    </section>
  );
}
