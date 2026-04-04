"use client";
import { Shield, Clock, Users, Award } from "lucide-react";

const valori = [
  { icon: Shield, titolo: "Affidabilità", desc: "Personale selezionato, formato e costantemente supervisionato per garantire continuità e qualità." },
  { icon: Clock, titolo: "Flessibilità", desc: "Interventi programmati nelle fasce orarie più comode: mattina presto, sera, fine settimana." },
  { icon: Users, titolo: "Professionalità", desc: "Team qualificato con esperienza in ambienti residenziali, commerciali e industriali." },
  { icon: Award, titolo: "Qualità certificata", desc: "Sanificazioni certificate, prodotti professionali e partner specializzati per ogni esigenza." },
];

export default function About() {
  return (
    <section id="chi-siamo" className="section-padding" style={{ background: "var(--bg-card)" }} aria-label="Chi siamo">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: "16px" }}>Chi siamo</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "24px", lineHeight: 1.15 }}>
              Esperti di pulizia<br />
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>dal 2023</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                <strong style={{ color: "var(--text-primary)" }}>A SERVICE SRLS</strong> è specializzata in servizi di pulizia professionale a Milano, con personale qualificato, interventi su misura e massima attenzione alla sicurezza.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Serviamo uffici, studi professionali, condomini, appartamenti, negozi e piccole realtà industriali, garantendo standard elevati e continuità nel tempo.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                La nostra forza è la <strong style={{ color: "var(--text-primary)" }}>flessibilità</strong>: ogni intervento viene pianificato in base alle reali esigenze del cliente, senza interferire con le attività quotidiane.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
              <a href="#preventivo" className="btn-primary">Contattaci</a>
              <a href="https://www.linkedin.com/company/a-servicesrls" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 24px", border: "1.5px solid var(--border)", borderRadius: "2px", textDecoration: "none", fontSize: "14px", color: "var(--text-secondary)", transition: "all 0.3s" }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: valori */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {valori.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={v.titolo} style={{
                    padding: "28px 24px", background: "var(--bg)",
                    border: "1px solid var(--border)", borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                      <Icon size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px", color: "var(--text-primary)" }}>{v.titolo}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginTop: "96px" }}>
          <p className="section-label" style={{ marginBottom: "40px", justifyContent: "center" }}>Testimonianze</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { testo: "Servizio impeccabile e puntuale. Il nostro ufficio non è mai stato così pulito. Lo staff è discreto e professionale.", autore: "Marco T.", ruolo: "Responsabile ufficio, Milano" },
              { testo: "Hanno gestito la pulizia post-cantiere con grande cura. Risultato ottimo, prezzi giusti. Consiglio vivamente.", autore: "Laura B.", ruolo: "Privata, Milano" },
              { testo: "Il trattamento del parquet è stato eccellente. Pavimento rinnovato come nuovo. Personale cortese e competente.", autore: "Stefano R.", ruolo: "Proprietario immobile, Milano" },
            ].map(t => (
              <blockquote key={t.autore} className="card" style={{ padding: "28px", borderLeft: "3px solid var(--accent)" }}>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "20px" }}>
                  "{t.testo}"
                </p>
                <footer>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--text-primary)" }}>{t.autore}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{t.ruolo}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
