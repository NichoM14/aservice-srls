import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Service SRLS — Pulizie e Manutenzioni a Milano",
  description: "Servizi professionali di pulizia, manutenzione e trattamento superfici per aziende e privati a Milano. Personale qualificato, interventi su misura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
