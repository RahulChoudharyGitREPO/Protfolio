import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rahul Choudhary — Full Stack Developer",
  description:
    "Full Stack Developer specializing in scalable backend systems, NestJS, React Native, and modern web applications.",
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "React Native",
    "NestJS",
    "Node.js",
    "Rahul Choudhary",
  ],
  authors: [{ name: "Rahul Choudhary" }],
  openGraph: {
    title: "Rahul Choudhary — Full Stack Developer",
    description: "I build scalable backend systems and modern mobile apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased grain`}>
        {children}
      </body>
    </html>
  );
}
