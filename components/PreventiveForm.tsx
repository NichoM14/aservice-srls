"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const serviziOptions = [
  "Pulizie Continuative",
  "Pulizie Straordinarie & Una Tantum",
  "Piccole Manutenzioni",
  "Trattamenti Superfici & Parquet",
  "Altro / Non so ancora",
];

type FormData = {
  nome: string;
  email: string;
  telefono: string;
  servizio: string;
  messaggio: string;
  privacy: boolean;
};

type Errors = Partial<Record<keyof FormData, string>>;

const validate = (data: FormData): Errors => {
  const e: Errors = {};
  if (!data.nome.trim()) e.nome = "Il nome è obbligatorio";
  if (!data.email.trim()) e.email = "L'email è obbligatoria";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email non valida";
  if (data.telefono && !/^[\d\s\+\-\(\)]{7,15}$/.test(data.telefono)) e.telefono = "Telefono non valido";
  if (!data.servizio) e.servizio = "Seleziona un servizio";
  if (!data.messaggio.trim()) e.messaggio = "Il messaggio è obbligatorio";
  else if (data.messaggio.length < 20) e.messaggio = "Messaggio troppo breve (min. 20 caratteri)";
  if (!data.privacy) e.privacy = "Devi accettare la privacy policy";
  return e;
};

export default function PreventiveForm() {
  const [form, setForm] = useState<FormData>({
    nome: "", email: "", telefono: "", servizio: "", messaggio: "", privacy: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("loading");
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800));
    setStatus("success");
    setForm({ nome: "", email: "", telefono: "", servizio: "", messaggio: "", privacy: false });
  };

  const fieldStyle = (name: keyof FormData) => ({
    ...{} as React.CSSProperties,
    borderColor: errors[name] ? "#e05a5a" : undefined,
  });

  if (status === "success") {
    return (
      <section id="preventivo" className="section-padding" style={{ background: "var(--bg)" }} aria-label="Richiesta preventivo">
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <CheckCircle size={40} style={{ color: "var(--accent)" }} />
          </div>
          <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "16px" }}>Richiesta inviata!</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "32px", lineHeight: 1.7 }}>
            Grazie per averci contattato. Il nostro team ti risponderà entro 24 ore lavorative all'indirizzo email indicato.
          </p>
          <button className="btn-primary" onClick={() => setStatus("idle")}>
            Invia un'altra richiesta
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="preventivo" className="section-padding" style={{ background: "var(--bg)" }} aria-label="Richiesta preventivo gratuito">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          {/* Left: info */}
          <div>
            <p className="section-label" style={{ marginBottom: "16px" }}>Contattaci</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.15 }}>
              Richiedi un<br />
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>preventivo gratuito</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "48px" }}>
              Compila il form e ti risponderemo entro 24 ore. Il preventivo è sempre gratuito e senza impegno.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { label: "Email", value: "aservicesrls1@gmail.com", href: "mailto:aservicesrls1@gmail.com" },
                { label: "Telefono", value: "+39 335 144 6503", href: "tel:+393351446503" },
                { label: "Indirizzo", value: "Via Spadolini 7 Palazzo B, Milano", href: "https://maps.google.com/?q=Via+Spadolini+7+Milano" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", marginTop: "10px", flexShrink: 0 }} aria-hidden="true" />
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2px" }}>
                      {item.label}
                    </div>
                    <a href={item.href} style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp shortcut */}
            <a href="https://wa.me/393351446503" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                marginTop: "40px", padding: "14px 24px",
                background: "#25d366", color: "white",
                borderRadius: "2px", textDecoration: "none",
                fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em",
                transition: "all 0.3s ease",
              }}
              aria-label="Contattaci su WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Scrivici su WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="card" style={{ padding: "40px" }}>
            <form onSubmit={handleSubmit} noValidate aria-label="Form richiesta preventivo">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                {/* Nome */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="nome" style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Nome e Cognome *
                  </label>
                  <input id="nome" name="nome" type="text" value={form.nome} onChange={handleChange}
                    className={`form-input ${errors.nome ? "error" : ""}`}
                    placeholder="Mario Rossi" autoComplete="name"
                    aria-required="true" aria-describedby={errors.nome ? "nome-error" : undefined}
                    style={fieldStyle("nome")} />
                  {errors.nome && <p id="nome-error" role="alert" style={{ color: "#e05a5a", fontSize: "12px", marginTop: "4px" }}>{errors.nome}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Email *
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="mario@email.com" autoComplete="email"
                    aria-required="true" aria-describedby={errors.email ? "email-error" : undefined}
                    style={fieldStyle("email")} />
                  {errors.email && <p id="email-error" role="alert" style={{ color: "#e05a5a", fontSize: "12px", marginTop: "4px" }}>{errors.email}</p>}
                </div>

                {/* Telefono */}
                <div>
                  <label htmlFor="telefono" style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Telefono
                  </label>
                  <input id="telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                    className={`form-input ${errors.telefono ? "error" : ""}`}
                    placeholder="+39 335 ..." autoComplete="tel"
                    aria-describedby={errors.telefono ? "tel-error" : undefined}
                    style={fieldStyle("telefono")} />
                  {errors.telefono && <p id="tel-error" role="alert" style={{ color: "#e05a5a", fontSize: "12px", marginTop: "4px" }}>{errors.telefono}</p>}
                </div>
              </div>

              {/* Servizio */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="servizio-select" style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Servizio di interesse *
                </label>
                <select id="servizio-select" name="servizio" value={form.servizio} onChange={handleChange}
                  className={`form-input ${errors.servizio ? "error" : ""}`}
                  aria-required="true" aria-describedby={errors.servizio ? "serv-error" : undefined}
                  style={{ ...fieldStyle("servizio"), cursor: "pointer" }}>
                  <option value="">Seleziona un servizio...</option>
                  {serviziOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.servizio && <p id="serv-error" role="alert" style={{ color: "#e05a5a", fontSize: "12px", marginTop: "4px" }}>{errors.servizio}</p>}
              </div>

              {/* Messaggio */}
              <div style={{ marginBottom: "24px" }}>
                <label htmlFor="messaggio" style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Messaggio *
                </label>
                <textarea id="messaggio" name="messaggio" value={form.messaggio} onChange={handleChange}
                  className={`form-input ${errors.messaggio ? "error" : ""}`}
                  placeholder="Descrivici le tue esigenze: tipo di immobile, metratura, frequenza desiderata..."
                  rows={4} aria-required="true" aria-describedby={errors.messaggio ? "msg-error" : undefined}
                  style={{ ...fieldStyle("messaggio"), resize: "vertical", minHeight: "100px" }} />
                {errors.messaggio && <p id="msg-error" role="alert" style={{ color: "#e05a5a", fontSize: "12px", marginTop: "4px" }}>{errors.messaggio}</p>}
              </div>

              {/* Privacy */}
              <div style={{ marginBottom: "28px" }}>
                <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
                  <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange}
                    aria-required="true"
                    style={{ marginTop: "3px", accentColor: "var(--accent)", width: "16px", height: "16px", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Ho letto e accetto la{" "}
                    <a href="#" style={{ color: "var(--accent)", textDecoration: "underline" }}>Privacy Policy</a>
                    {" "}e il trattamento dei miei dati personali. *
                  </span>
                </label>
                {errors.privacy && <p role="alert" style={{ color: "#e05a5a", fontSize: "12px", marginTop: "6px" }}>{errors.privacy}</p>}
              </div>

              <button type="submit" className="btn-primary" disabled={status === "loading"}
                style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}
                aria-busy={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <span style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
                    Invio in corso...
                  </>
                ) : (
                  <>Invia Richiesta <Send size={15} aria-hidden="true" /></>
                )}
              </button>

              {status === "error" && (
                <div role="alert" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", padding: "12px", background: "rgba(224,90,90,0.1)", border: "1px solid rgba(224,90,90,0.3)", borderRadius: "2px" }}>
                  <AlertCircle size={16} style={{ color: "#e05a5a" }} />
                  <span style={{ fontSize: "13px", color: "#e05a5a" }}>Errore nell'invio. Riprova o contattaci direttamente.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
