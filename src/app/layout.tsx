import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const metadata: Metadata = {
  title: "Уудам — Чимээгүй гайхамшигт аяллууд",
  description:
    "Хувийн аяллын ателье. Ази болон бусад дэлхийг хамарсан гар аргаар зохиосон аяллууд.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#06090f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className="grain">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
