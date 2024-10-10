import Logo from "@/public/images/logo-light.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-gray-950 text-gray-400">
        <div className="container">
          <div className="py-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="ZamZam Graphics"
                  width={150}
                  quality={100}
                  priority={true}
                />
              </Link>
              <p className="py-5 w-full md:w-3/4">
                Best Web Development Company <br /> To Architect The Dream For
                Next Generation.
              </p>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-lg mb-3 pb-2 font-medium text-white border-b border-gray-800">
                Address
              </h3>
              <p>
                Masjid Market (2nd floor), Masjid Market,
                <br /> Masjid Road, Brahmanbaria-3400, Bangladesh
              </p>
              <h3 className="font-medium mt-4">Email:</h3>
              <Link href="mailto:zamzamprintmedia@gmail.com">
                zamzamprintmedia@gmail.com
              </Link>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-lg mb-3 pb-2 font-medium text-white border-b border-gray-800">
                Phone
              </h3>
              <p>+8801716426093</p>
              <p>+8801816426093</p>
            </div>
          </div>
          <div className="border-t border-gray-800">
            <p className="p-5 text-center text-sm">
              Copyright © 2024 ZamZam Graphics. All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
