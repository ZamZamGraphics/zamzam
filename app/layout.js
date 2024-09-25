import Header from "@/app/components/Header";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
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
      <body className={`${roboto.className} bg-sky-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
