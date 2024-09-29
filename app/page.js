import EcommerceIcon from "@/public/icons/ecommerce.png";
import GraphicDesignIcon from "@/public/icons/graphic-design.png";
import ServerIcon from "@/public/icons/server.png";
import WebDesignIcon from "@/public/icons/web-design.png";
import WebdevPhoto from "@/public/images/webdev.png";
import Image from "next/image";
import Animated from "./components/Animated";

export default function Home() {
  return (
    <>
      <div className="container py-10 sm:py-32">
        <div className="flex w-full gap-10 flex-col md:flex-row items-center">
          <div className="basis-2/4 px-5">
            <Animated animateClass="animate__fadeInLeft">
              <span className="px-3 py-1 text-base md:text-xl rounded-full bg-lime-500 text-white">
                Best Web Design Company in Brahmanbaria
              </span>
            </Animated>
            <Animated animateClass="animate__fadeInLeft animate__delay-200ms">
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl text-slate-900 uppercase ">
                WE CREATE INNOVATIVE
              </h2>
            </Animated>
            <Animated animateClass="animate__fadeInLeft animate__delay-300ms">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-blue-500 ">
                WEB <span className="text-lime-500">SOLUTIONS</span>
              </h1>
            </Animated>
            <Animated animateClass="animate__fadeInLeft animate__delay-500ms">
              <h2 className="text-2xl md:text-3xl lg:text-5xl text-slate-900 uppercase ">
                WITH LATEST TECHNOLOGIES
              </h2>
            </Animated>
            <p className="mt-5 text-xl">
              We combine the latest technologies, technical skills and industry
              expertise to build the most powerful eCommerce solutions that help
              you to scale up your business.
            </p>
          </div>
          <Animated
            classes="flex basis-2/4 items-center justify-center p-10"
            animateClass="animate__fadeInRight"
          >
            <Image src={WebdevPhoto} width={400} alt="Web Development" />
          </Animated>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <Animated
            classes="service-box border-gradient"
            animateClass="animate__fadeInDown"
          >
            <div className="p-5 flex items-center justify-center">
              <Image src={WebDesignIcon} width={80} alt="Web Design" />
            </div>
            <h3 className="text-xl my-2 font-medium text-slate-900">
              Website Design
            </h3>
            <p className="text-sm">
              Website Design and Development is investable for any type of
              business regardless the size of the business whether is a small
              business enterprise or large corporate house.
            </p>
          </Animated>
          <Animated
            classes="service-box border-gradient"
            animateClass="animate__fadeInDown animate__delay-200ms"
          >
            <div className="p-5 flex items-center justify-center">
              <Image src={ServerIcon} width={80} alt="Web Design" />
            </div>
            <h3 className="text-xl my-2 font-medium text-slate-900">
              Domain & Hosting
            </h3>
            <p className="text-sm">
              We provide top class Domain & Hosting which can be purchase or
              renew online buy using 100% secure payment gateways. We accept any
              local currency card.
            </p>
          </Animated>
          <Animated
            classes="service-box border-gradient"
            animateClass="animate__fadeInDown animate__delay-300ms"
          >
            <div className="p-5 flex items-center justify-center">
              <Image src={EcommerceIcon} width={80} alt="Web Design" />
            </div>
            <h3 className="text-xl my-2 font-medium text-slate-900">
              Ecommerce Website
            </h3>
            <p className="text-sm">
              eCommerce Website business opportunity is huge in Bangladesh,
              Anyone could earn a huge amount of revenue from a Ecommerce
              Website using different platform.
            </p>
          </Animated>
          <Animated
            classes="service-box border-gradient"
            animateClass="animate__fadeInDown animate__delay-500ms"
          >
            <div className="p-5 flex items-center justify-center">
              <Image src={GraphicDesignIcon} width={80} alt="Web Design" />
            </div>
            <h3 className="text-xl my-2 font-medium text-slate-900">
              Graphics Design
            </h3>
            <p className="text-sm">
              Graphic Design is now a day’s very necessary one. The demand of
              the Graphic Design is rising day by day due to the market boom of
              e-commerce and digital marketing.
            </p>
          </Animated>
        </div>
      </div>
    </>
  );
}
