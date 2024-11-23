import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tomoki Ota's Portfolio",
  description: "Tomoki Otaのポートフォリオサイトです。",
  twitter: {
    card: "summary_large_image",
    images: ["/img/ogp.png"],
  },
  openGraph: {
    title: "Tomoki Ota's Portfolio",
    description: "Tomoki Otaのポートフォリオサイトです。",
    url: "https://tomokiota.vercel.app/",
    siteName: "Tomoki Ota's Portfolio",
    images: {
      url: "/img/ogp.png",
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="SRmBeocaKXyHHvQl7x1ZFQ6iBSPdGiy34nGo0ljyVkU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
