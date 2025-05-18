// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Make sure Josefin Sans is imported in here

export const metadata: Metadata = {
  title: "My App",
  description: "Just a cool app",
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
