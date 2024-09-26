"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button className="p-3 sm:hidden" onClick={() => setOpen(!open)}>
        <IconMenu2 stroke={1} />
      </button>
      <ul className={`nav-item sm:flex ${open ? "" : "hidden"}`}>
        <li>
          <Link
            className={`nav-link ${pathname === "/" ? "nav-active" : ""}`}
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${pathname === "/about" ? "nav-active" : ""}`}
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              pathname === "/services" ? "nav-active" : ""
            }`}
            href="/services"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              pathname === "/contact" ? "nav-active" : ""
            }`}
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contuct Us
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
