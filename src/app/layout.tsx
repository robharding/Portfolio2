import "./globals.css";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
  weight: ["100", "200", "300", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rob Harding",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
