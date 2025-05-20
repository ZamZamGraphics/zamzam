import Image from "next/image";
import Link from "next/link";
import almadinaitPhoto from "@/public/images/almadinait.jpg";
import bhorerpotroPhoto from "@/public/images/bhorerpotro.jpg";
import ovizanPhoto from "@/public/images/ovizan.jpg";
import tepantorPhoto from "@/public/images/tepantor.jpg";

function Glance() {
  return (
    <div className="container py-10 px-5">
      <div className="text-center my-5">
        <h3 className="text-3xl text-black font-bold">
          ZamZam Devs at A Glance
        </h3>
      </div>
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid gap-5">
          <div className="rounded-lg overflow-hidden relative group">
            <Image
              src={almadinaitPhoto}
              alt="Project Title"
              className="duration-500 hover:scale-105"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Link
              className="px-6 py-2 text-sm hidden group-hover:block absolute z-10 left-3 bottom-3 rounded-full bg-blue-700 text-white font-medium"
              href="https://almadinait.com"
              target="_blank"
            >
              Visit Site
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-lg overflow-hidden relative group">
              <Image
                src={ovizanPhoto}
                alt="Project Title"
                className="duration-500 hover:scale-105"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Link
                className="px-6 py-2 text-sm hidden group-hover:block absolute z-10 left-3 bottom-3 rounded-full bg-blue-700 text-white font-medium"
                href="https://ovizan.net"
                target="_blank"
              >
                Visit Site
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden relative group">
              <Image
                src={bhorerpotroPhoto}
                alt="Project Title"
                className="duration-500 hover:scale-105"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Link
                className="px-6 py-2 text-sm hidden group-hover:block absolute z-10 left-3 bottom-3 rounded-full bg-blue-700 text-white font-medium"
                href="https://bhorerpotro.com"
                target="_blank"
              >
                Visit Site
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-lg overflow-hidden relative group">
              <Image
                src={tepantorPhoto}
                alt="Project Title"
                className="duration-500 hover:scale-105"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Link
                className="px-6 py-2 text-sm hidden group-hover:block absolute z-10 left-3 bottom-3 rounded-full bg-blue-700 text-white font-medium"
                href="https://tepantor.net"
                target="_blank"
              >
                Visit Site
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden relative group">
              <Image
                src={ovizanPhoto}
                alt="Project Title"
                className="duration-500 hover:scale-105"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Link
                className="px-6 py-2 text-sm hidden group-hover:block absolute z-10 left-3 bottom-3 rounded-full bg-blue-700 text-white font-medium"
                href="https://ovizan.net"
                target="_blank"
              >
                Visit Site
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden relative group">
            <Image
              src={tepantorPhoto}
              alt="Project Title"
              className="duration-500 hover:scale-105"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Link
              className="px-6 py-2 text-sm hidden group-hover:block absolute z-10 left-3 bottom-3 rounded-full bg-blue-700 text-white font-medium"
              href="https://tepantor.net"
              target="_blank"
            >
              Visit Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Glance
