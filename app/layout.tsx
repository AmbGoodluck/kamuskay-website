import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kamuskay Kamara | SGA President Candidate",
    template: "%s | Kamuskay Kamara",
  },
  description:
    "Kamuskay Kamara: Berea College junior, community builder, and candidate for SGA President. Leadership that listens. Action that delivers.",
  openGraph: {
    title: "Kamuskay Kamara | SGA President Candidate",
    description:
      "Leadership that listens. Action that delivers. Kamuskay Kamara for SGA President at Berea College.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
