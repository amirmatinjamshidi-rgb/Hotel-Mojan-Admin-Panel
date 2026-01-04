import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import MuiProvider from "@/features/provider/MuiProvider";
import Navbar from "@/features/layout/Navbar";
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "هتل ساحلی موجان",
  description: "تجربه آرامش در کنار دریای عمان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <meta name="theme-color" content="#1bb566" />
      </head>
      <body className="font-vazirmatn">
        <MuiProvider>
          <div className="flex min-h-screen">
            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="p-6">{children}</main>
            </div>
          </div>
        </MuiProvider>
      </body>
    </html>
  );
}
