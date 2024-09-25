import Navbar from "@/app/components/Navbar";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="p-3">
            <Link href="/">
              <Image src={Logo} alt="ZamZam Graphics" width={150} />
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </nav>
  );
}

export default Header;
