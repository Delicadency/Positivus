import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff",
  weight: "400 700",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Positivus - Navigating the digital landscape for success",
  description: "Landing page created for a non-commercial project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
