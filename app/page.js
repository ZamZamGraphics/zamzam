import WebdevPhoto from "@/public/images/webdev.png";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="container py-10 sm:py-32">
        <div className="flex w-full gap-10 flex-col md:flex-row items-center">
          <div className="basis-2/4 animate-fade-right px-5">
            <span className="px-3 py-1 text-base md:text-xl rounded-full bg-lime-500 text-white">
              Best Web Design Company in Brahmanbaria
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl text-slate-900 uppercase animate-fade-right animate-delay-150">
              WE CREATE INNOVATIVE
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-blue-500 animate-fade-right animate-delay-300">
              WEB <span className="text-lime-500">SOLUTIONS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-slate-900 uppercase animate-fade-right animate-delay-500">
              WITH LATEST TECHNOLOGIES
            </h2>
            <p className="mt-5 text-xl">
              We combine the latest technologies, technical skills and industry
              expertise to build the most powerful eCommerce solutions that help
              you to scale up your business.
            </p>
          </div>
          <div className="flex basis-2/4 items-center justify-center p-10 animate-fade-left">
            <Image src={WebdevPhoto} width={400} alt="Web Development" />
          </div>
        </div>
      </div>
      <div className="container py-10">
        <div className="text-center my-5">
          <h3 className="text-3xl text-slate-900">
            Awsome Service{" "}
            <span className="font-medium text-blue-500">We Provide</span>
          </h3>
          <p className="text-sm">
            Being a Best Website Design Company in Brahmanbaria
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="service-box border-gradient">
            <div>images</div>
            <h3 className="text-xl my-2 font-medium text-slate-900">
              Website Design
            </h3>
            <p className="text-sm">
              Website Design and Development is investable for any type of
              business regardless the size of the business whether is a small
              business enterprise or large corporate house.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
