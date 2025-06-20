import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "animate.css";
import { Bricolage_Grotesque, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  weigth: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ZamZam Graphics",
  description: "Quality Design and Printing House",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${bricolage.className}`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
