// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Align Delivery — Nick Parsons",
  description:
    "Leadership and product consulting for teams who want to ship faster, align better, and scale sustainably.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Align<span className="text-blue-600">Delivery</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/cases" className="hover:text-blue-600 transition">
              Cases
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>

        <footer className="border-t border-gray-200 mt-12 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Align Delivery — Nick Parsons
        </footer>
      </body>
    </html>
  );
}
