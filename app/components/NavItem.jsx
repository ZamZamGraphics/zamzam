import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ path, setOpen, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={`nav-link ${pathname === path ? "nav-active" : ""}`}
      href={path}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );
}

export default NavItem;
