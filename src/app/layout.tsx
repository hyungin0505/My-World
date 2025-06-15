import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../styles/globals.css";
import Link from "next/link";
import "prismjs/themes/prism-tomorrow.css"; 
import GlobalClickSound from "./../components/globalClickSound";
import PageTransition from "@/components/pageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KoGandhi's World",
  description: "Welcome to visit my place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko_KR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><GlobalClickSound/>
        <div>
        <div className="header">
          <div><h1><Link href="/">KoGandhi&apos;s World</Link></h1></div>
            <nav className="nav"><ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/posts">Posts</Link></li>
            </ul></nav>
          </div>
        </div>
        <div className="mainField">
          <PageTransition />
          {children}
        </div>
        <div className="footer">
          <p className="copyright">© 2025 <span>KoGandhi</span>. All rights reserved.</p>
          <p className="build">Built with Next.js & Tailwind CSS</p>
          <p className="design">Designed & Developed by KoGandhi</p>
          <p className="inspire">Inspired by <span className="text-bold">Minecraft</span></p>
        </div>
      </body>
    </html>
  );
}
