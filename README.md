# A Service SRLS — Sito Web Professionale

Sito web moderno per A Service SRLS, azienda di pulizie e manutenzioni a Milano

## Stack tecnologico

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icone)

## Avvio rapido

```bash
# 1. Installa dipendenze
npm install

# 2. Avvia in sviluppo
npm run dev

# 3. Apri il browser
# → http://localhost:3000
```

## Build per produzione

```bash
npm run build
npm start
```

## Deploy

### Vercel (raccomandato)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Carica cartella .next su Netlify con build command: npm run build
```

## Struttura

```
app/
  layout.tsx        → Metadati SEO
  page.tsx          → Pagina principale
  globals.css       → Design system (variabili CSS, animazioni)
components/
  Navbar.tsx        → Navigazione sticky + hamburger mobile
  Hero.tsx          → Hero section dark con CTA
  Services.tsx      → Griglia servizi con filtro e ricerca
  Pricing.tsx       → Tabelle prezzi a 3 livelli
  About.tsx         → Chi siamo + valori + testimonianze
  PreventiveForm.tsx→ Form preventivo con validazione
  Footer.tsx        → Footer con tutti i contatti
  WhatsAppFloat.tsx → Bottone WhatsApp fisso
```

## Contatti azienda

- Email: aservicesrls1@gmail.com
- Tel: +39 335 144 6503
- Indirizzo: Via Spadolini 7 Palazzo B, Milano

## Personalizzazione

Per integrare un vero backend di invio email, modificare `handleSubmit` in `PreventiveForm.tsx`
con EmailJS, Resend, o una API route Next.js.
