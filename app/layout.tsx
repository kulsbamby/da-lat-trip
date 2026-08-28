import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Đà Lạt, trước khi nhập đoàn | 17–21.09.2026",
  description: "Sổ tay đi sớm, WFH và company trip Đà Lạt 2026.",
  openGraph: {
    title: "Đà Lạt, trước khi nhập đoàn",
    description: "Sổ tay đi sớm, WFH và company trip Đà Lạt 2026.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đà Lạt, trước khi nhập đoàn",
    description: "Sổ tay đi sớm, WFH và company trip Đà Lạt 2026.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
