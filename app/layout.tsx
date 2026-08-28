import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KudaEmas Catering House",
  description: "Premium catering services in Malaysia",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KudaEmas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}