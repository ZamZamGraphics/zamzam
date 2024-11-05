import Animated from "@/app/components/Animated";
import EcommerceIcon from "@/public/icons/ecommerce.png";
import GraphicDesignIcon from "@/public/icons/graphic-design.png";
import ServerIcon from "@/public/icons/server.png";
import WebDesignIcon from "@/public/icons/web-design.png";
import Image from "next/image";

function Services() {
  return (
    <>
      <Animated classes="service-box" animateClass="animate__fadeInRight">
        <div className="p-5 flex items-center justify-center">
          <Image src={WebDesignIcon} width={80} alt="Web Design" />
        </div>
        <h3 className="text-xl my-2 font-semibold text-black">
          Website Design
        </h3>
        <p className="text-sm">
          Website Design and Development is investable for any type of business
          regardless the size of the business whether is a small business
          enterprise or large corporate house.
        </p>
      </Animated>
      <Animated
        classes="service-box"
        animateClass="animate__fadeInRight animate__delay-200ms"
      >
        <div className="p-5 flex items-center justify-center">
          <Image src={ServerIcon} width={80} alt="Web Design" />
        </div>
        <h3 className="text-xl my-2 font-semibold text-black">
          Domain & Hosting
        </h3>
        <p className="text-sm">
          We provide top class Domain & Hosting which can be purchase or renew
          online buy using 100% secure payment gateways. We accept any local
          currency card.
        </p>
      </Animated>
      <Animated
        classes="service-box"
        animateClass="animate__fadeInRight animate__delay-300ms"
      >
        <div className="p-5 flex items-center justify-center">
          <Image src={EcommerceIcon} width={80} alt="Web Design" />
        </div>
        <h3 className="text-xl my-2 font-semibold text-black">
          Ecommerce Website
        </h3>
        <p className="text-sm">
          eCommerce Website business opportunity is huge in Bangladesh, Anyone
          could earn a huge amount of revenue from a Ecommerce Website using
          different platform.
        </p>
      </Animated>
      <Animated
        classes="service-box"
        animateClass="animate__fadeInRight animate__delay-500ms"
      >
        <div className="p-5 flex items-center justify-center">
          <Image src={GraphicDesignIcon} width={80} alt="Web Design" />
        </div>
        <h3 className="text-xl my-2 font-semibold text-black">
          Graphics Design
        </h3>
        <p className="text-sm">
          Graphic Design is now a day’s very necessary one. The demand of the
          Graphic Design is rising day by day due to the market boom of
          e-commerce and digital marketing.
        </p>
      </Animated>
    </>
  );
}

export default Services;
