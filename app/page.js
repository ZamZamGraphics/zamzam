import WebdevPhoto from "@/public/images/webdev.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container p-6">
      <div className="flex w-full gap-5 flex-col md:flex-row items-center">
        <div className="basis-3/5 animate-fade-right">
          <span className="px-3 py-1 text-base md:text-xl rounded-full bg-lime-500 text-white">
            Best Web Design Company in Bangladesh
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl text-slate-900 uppercase animate-fade-right">
            WE CREATE INNOVATIVE
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-blue-500 animate-fade-right">
            WEB <span className="text-lime-500">SOLUTIONS</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-slate-900 uppercase animate-fade-right">
            WITH LATEST TECHNOLOGIES
          </h2>
        </div>
        <div className="flex basis-2/5 items-center justify-center p-10 animate-fade-left">
          <Image src={WebdevPhoto} width={400} alt="Web Development" />
        </div>
      </div>
    </div>
  );
}
