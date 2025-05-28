import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import "../lib/fontawesome";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
})

export const metadata: Metadata = {
  title: "GOCCAR",
  description: "Your budget friendly travel partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body
        className={`antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
