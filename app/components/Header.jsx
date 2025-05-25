"use client";
import Navbar from "@/app/components/Navbar";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setScroll(false);
      });
  });

  const stickyClass =
    "w-full bg-white/85 shadow sticky top-0 z-10 animate__animated animate__fadeInDown";

  return (
    <nav className={`${scroll ? stickyClass : ""}`}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="p-3 animate__animated animate__fadeInLeft">
            <Link href="/">
              <Image
                src={Logo}
                alt="ZamZam Graphics"
                width={150}
                quality={100}
                priority={true}
              />
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </nav>
  );
}

export default Header;
