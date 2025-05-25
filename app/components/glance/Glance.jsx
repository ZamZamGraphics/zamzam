import almadinaitPhoto from "@/public/images/ait.jpg";
import bhorerpotroPhoto from "@/public/images/bhor.jpg";
import frontier from "@/public/images/front.jpg";
import hena from "@/public/images/hena.jpg";
import ovizanPhoto from "@/public/images/ovizan.jpg";
import tepantorPhoto from "@/public/images/tepantor.jpg";
import Image from "next/image";
import Link from "next/link";

function Glance() {
  return (
    <div className="container py-10 px-5">
      <div className="text-center my-5">
        <h3 className="text-3xl text-black font-bold">
          ZamZam Devs at A Glance
        </h3>
      </div>
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        <div className="overflow-hidden relative group">
          <Image
            src={almadinaitPhoto}
            alt="Al-Madina IT"
            className="duration-500 group-hover:scale-105"
            quality={100}
            width={750}
            height={560}
            placeholder="blur"
          />
          <Link
            className="absolute z-10 top-0 right-0 left-0 bottom-0"
            href="https://almadinait.com"
            target="_blank"
          >
          </Link>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            src={tepantorPhoto}
            alt="Tepantor"
            className="duration-500 group-hover:scale-105"
            quality={100}
            width={750}
            height={560}
            placeholder="blur"
          />
          <Link
            className="absolute z-10 top-0 right-0 left-0 bottom-0"
            href="https://tepantor.net"
            target="_blank"
          >
          </Link>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            src={ovizanPhoto}
            alt="Ovizan"
            className="duration-500 group-hover:scale-105"
            quality={100}
            width={750}
            height={560}
            placeholder="blur"
          />
          <Link
            className="absolute z-10 top-0 right-0 left-0 bottom-0"
            href="https://ovizan.net"
            target="_blank"
          >
          </Link>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            src={bhorerpotroPhoto}
            alt="Bhorerpotro"
            className="duration-500 group-hover:scale-105"
            quality={100}
            width={750}
            height={560}
            placeholder="blur"
          />
          <Link
            className="absolute z-10 top-0 right-0 left-0 bottom-0"
            href="https://bhorerpotro.com"
            target="_blank"
          >
          </Link>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            src={frontier}
            alt="Daily Frontier"
            className="duration-500 group-hover:scale-105"
            quality={100}
            width={750}
            height={560}
            placeholder="blur"
          />
          <Link
            className="absolute z-10 top-0 right-0 left-0 bottom-0"
            href="https://dailyfrontier.news"
            target="_blank"
          >
          </Link>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            src={hena}
            alt="Hena International"
            className="duration-500 group-hover:scale-105"
            quality={100}
            width={750}
            height={560}
            placeholder="blur"
          />
          <Link
            className="absolute z-10 top-0 right-0 left-0 bottom-0"
            href="https://henainternational.com"
            target="_blank"
          >
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Glance
