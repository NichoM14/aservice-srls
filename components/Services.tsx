"use client";
import { useState } from "react";
import { Sparkles, Wrench, Layers, CalendarCheck, ArrowRight, Search } from "lucide-react";

const servizi = [
  {
    id: "continuative",
    categoria: "Pulizie",
    icon: CalendarCheck,
    nome: "Pulizie Continuative",
    descrizione: "Servizio regolare e personalizzato per uffici, studi professionali, condomini, appartamenti, negozi e piccole realtà industriali. Interventi programmati quotidianamente, settimanalmente o su richiesta, nelle fasce orarie preferite.",
    prezzo: "Su preventivo",
    prezzoNote: "Personalizzato in base alla frequenza e metratura",
    features: ["Uffici e studi professionali", "Condomini e appartamenti", "Negozi e piccole industrie", "Orari flessibili (anche prima/dopo lavoro)"],
    tag: "Più richiesto",
  },
  {
    id: "straordinarie",
    categoria: "Pulizie",
    icon: Sparkles,
    nome: "Pulizie Straordinarie & Una Tantum",
    descrizione: "Interventi mirati per situazioni specifiche che richiedono un'azione approfondita. Sanificazioni certificate, disinfestazioni e derattizzazioni tramite partner qualificati per ambienti sicuri e igienizzati.",
    prezzo: "Su preventivo",
    prezzoNote: "Variabile in base a metratura e tipo di intervento",
    features: ["Pulizie post cantiere", "Pulizie profonde", "Interventi dopo trasloco", "Sanificazioni certificate", "Disinfestazione e derattizzazione"],
    tag: null,
  },
  {
    id: "manutenzioni",
    categoria: "Manutenzione",
    icon: Wrench,
    nome: "Piccole Manutenzioni",
    descrizione: "Supporto tecnico per aziende, uffici e condomini. Un unico referente affidabile per risolvere rapidamente piccoli problemi tecnici, riducendo tempi e costi di gestione.",
    prezzo: "Da €49 a intervento",
    prezzoNote: "Pacchetti manutentivi su preventivo",
    features: ["Regolazione finestre e tapparelle", "Riparazione porte e maniglie", "Piccoli interventi ai sanitari", "Controlli funzionali di base"],
    tag: "Prezzo fisso",
  },
  {
    id: "superfici",
    categoria: "Trattamenti",
    icon: Layers,
    nome: "Trattamenti Superfici & Parquet",
    descrizione: "Servizi specialistici per la cura e il ripristino di superfici e pavimentazioni. Migliora l'estetica, aumenta la durata e mantiene elevati standard qualitativi nel tempo.",
    prezzo: "Da €15/m²",
    prezzoNote: "Variabile in base al trattamento richiesto",
    features: ["Posa parquet", "Levigatura e lucidatura", "Ripristino superfici danneggiate", "Trattamenti per materiali delicati"],
    tag: "Prezzo chiaro",
  },
];

const categorie = ["Tutti", "Pulizie", "Manutenzione", "Trattamenti"];

export default function Services() {
  const [filtro, setFiltro] = useState("Tutti");
  const [ricerca, setRicerca] = useState("");

  const filtrati = servizi.filter(s => {
    const matchCategoria = filtro === "Tutti" || s.categoria === filtro;
    const matchRicerca = s.nome.toLowerCase().includes(ricerca.toLowerCase()) ||
      s.descrizione.toLowerCase().includes(ricerca.toLowerCase());
    return matchCategoria && matchRicerca;
  });

  const openPreventivo = (servizio: string) => {
    const el = document.getElementById("preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    const sel = document.getElementById("servizio-select") as HTMLSelectElement;
    if (sel) sel.value = servizio;
  };

  return (
    <section id="servizi" className="section-padding" style={{ background: "var(--bg)" }} aria-label="I nostri servizi">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>Cosa offriamo</p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px" }}>
            I Nostri Servizi
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "520px", fontSize: "1.05rem" }}>
            Dalla pulizia ordinaria ai trattamenti specializzati — soluzioni professionali per ogni esigenza.
          </p>
        </div>

        {/* Filtri + Ricerca */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "48px", alignItems: "center" }}>
          {/* Search */}
          <div style={{ position: "relative", flex: "1", minWidth: "220px", maxWidth: "320px" }}>
            <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} aria-hidden="true" />
            <input
              type="search"
              placeholder="Cerca un servizio..."
              value={ricerca}
              onChange={e => setRicerca(e.target.value)}
              className="form-input"
              aria-label="Cerca servizi"
              style={{ paddingLeft: "42px" }}
            />
          </div>

          {/* Category pills */}
          <div role="group" aria-label="Filtra per categoria" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categorie.map(c => (
              <button key={c} onClick={() => setFiltro(c)}
                aria-pressed={filtro === c}
                style={{
                  padding: "8px 20px", borderRadius: "2px", border: "1.5px solid",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500,
                  letterSpacing: "0.05em", cursor: "pointer", transition: "all 0.2s",
                  background: filtro === c ? "var(--accent)" : "transparent",
                  color: filtro === c ? "white" : "var(--text-secondary)",
                  borderColor: filtro === c ? "var(--accent)" : "var(--border)",
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        {filtrati.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "48px 0" }}>
            Nessun servizio trovato per "{ricerca}".
          </p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {filtrati.map(s => {
              const Icon = s.icon;
              return (
                <article key={s.id} className="card" style={{ padding: "32px" }}>
                  {/* Top */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div className="icon-circle">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    {s.tag && <span className="tag">{s.tag}</span>}
                  </div>

                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                      {s.categoria}
                    </span>
                  </div>

                  <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "12px", color: "var(--text-primary)" }}>
                    {s.nome}
                  </h3>

                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                    {s.descrizione}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: "none", marginBottom: "24px" }} aria-label="Cosa include">
                    {s.features.map(f => (
                      <li key={f} style={{ fontSize: "13px", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "24px" }} aria-hidden="true" />

                  {/* Price */}
                  <div style={{ marginBottom: "20px" }}>
                    <div className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {s.prezzo}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{s.prezzoNote}</div>
                  </div>

                  <button onClick={() => openPreventivo(s.nome)} className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}
                    aria-label={`Richiedi informazioni su ${s.nome}`}>
                    Richiedi Informazioni <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
