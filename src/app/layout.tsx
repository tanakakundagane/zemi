import "./globals.css";
import type { Metadata } from "next";
import { M_PLUS_1_Code } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const m_PLUS_1Code = M_PLUS_1_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Origin.zemi",
  description: "学習塾のウェブサイトです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={m_PLUS_1Code.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
