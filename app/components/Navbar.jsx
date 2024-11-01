import NavItem from "@/app/components/NavItem";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="p-3 sm:hidden" onClick={() => setOpen(!open)}>
        <IconMenu2 stroke={1} />
      </button>
      <ul
        className={`nav-item animate__animated animate__fadeInRight sm:flex ${
          open ? "" : "hidden"
        }`}
      >
        <li>
          <NavItem path="/" setOpen={setOpen}>
            Home
          </NavItem>
        </li>
        <li>
          <NavItem path="/services" setOpen={setOpen}>
            Services
          </NavItem>
        </li>
        <li>
          <NavItem path="/about" setOpen={setOpen}>
            About
          </NavItem>
        </li>
        <li>
          <NavItem path="/contact" setOpen={setOpen}>
            Contact Us
          </NavItem>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
