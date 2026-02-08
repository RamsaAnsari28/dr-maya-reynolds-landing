import "./globals.css";
import { Playfair_Display, Lora } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Maya",
  description: "Maya Therapy Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
