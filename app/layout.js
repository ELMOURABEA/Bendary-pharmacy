import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El-Bendary Pharmacy | صيدليات البنداري",
  description: "Your trusted pharmacy for health, wellness, and care. Since 1980.",
  keywords: "pharmacy, medicines, vitamins, skincare, Egypt, Bendary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
