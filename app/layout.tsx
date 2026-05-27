import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulizie Professionali Milano | A Service SRLS",
  description: "Pulizie professionali per uffici, studi e aziende a Milano. Manutenzione, sanificazioni e trattamenti parquet. Team qualificato, preventivo gratuito. Chiama ora: +39 335 144 6503",
  keywords: "pulizie professionali Milano, pulizie uffici Milano, manutenzione uffici Milano, sanificazione Milano, pulizie aziende Milano, impresa pulizie Milano, A Service SRLS",
  openGraph: {
    title: "Pulizie Professionali Milano | A Service SRLS",
    description: "Pulizie professionali per uffici e aziende a Milano. Preventivo gratuito.",
    url: "https://aservice-srls.com",
    siteName: "A Service SRLS",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
