import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Dragon News",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="min-h-screen w-4/5 mx-auto">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
