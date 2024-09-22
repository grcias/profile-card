import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gracia Patty",
  description: "Generated by grcias",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-josefin min-h-screen bg-gradient">{children}</body>
    </html>
  );
}
