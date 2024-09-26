import Header from "@/app/components/Header";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ZamZam Graphics",
  description: "Quality Design and Printing House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-sky-100 text-base font-light text-slate-500`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
