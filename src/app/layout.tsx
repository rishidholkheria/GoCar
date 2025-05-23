import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'], 
})

export const metadata: Metadata = {
  title: "GocCar",
  description: "Your budget friendly travel partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body
        className={`antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
