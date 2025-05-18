// app/layout.tsx
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css"; // Make sure Josefin Sans is imported in here

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["400", "700"], // optional: specify weights you want
});
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
      <body className={`${josefin.variable} font-sans`}>{children}</body>
    </html>
  );
}
