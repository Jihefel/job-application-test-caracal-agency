import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";

const haptik = localFont({
  src: [
    {
      path: "../../public/fonts/GT-Haptik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Haptik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Haptik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--haptik",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Deltrian",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${haptik.variable} font-haptik`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}