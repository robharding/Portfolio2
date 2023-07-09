import "./globals.css";
import { Inter } from "next/font/google";

// const barlow = Barlow_Semi_Condensed({
//   weight: ["300", "500", "600", "700"],
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
