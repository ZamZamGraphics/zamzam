import Animated from "@/app/components/Animated";
import Services from "@/app/components/Services";
import StarRating from "@/app/components/StarRating";
import ProjectPhoto from "@/public/images/almadinait.jpg";
import ClientPhoto from "@/public/images/hazary.jpg";
import WebdevPhoto from "@/public/images/webdev.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // getDeviceInfo();
  return (
    <>
      <div className="container py-10 sm:py-32">
        <div className="flex w-full gap-10 flex-col md:flex-row items-center">
          <div className="basis-2/4 px-5">
            <Animated animateClass="animate__fadeInLeft">
              <span className="px-3 py-1 text-base md:text-xl font-medium rounded-full bg-black text-white">
                Best Web Design Company in Brahmanbaria
              </span>
            </Animated>
            <Animated animateClass="animate__fadeInLeft animate__delay-200ms">
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl text-slate-900 font-bold">
                We Create Innovative
              </h2>
            </Animated>
            <Animated animateClass="animate__fadeInLeft animate__delay-300ms">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black ">
                Web <span className="text-black">Solutions</span>
              </h1>
            </Animated>
            <Animated animateClass="animate__fadeInLeft animate__delay-500ms">
              <h2 className="text-2xl md:text-3xl lg:text-5xl text-black font-bold">
                With Latest Technologies
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
          <h3 className="text-3xl text-black font-bold">
            Awsome Service We Provide
          </h3>
          <p className="text-sm">
            Being a Best Website Design Company in Brahmanbaria
          </p>
        </div>
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Services />
        </div>
      </div>
      <div className="container py-10 px-5">
        <div className="w-full md:w-3/4 text-center bg-sky-100 mx-auto p-10 rounded-2xl">
          <h3 className="text-3xl text-black font-bold">About us</h3>
          <p className="p-3">
            Our company specializes in creating visually stunning and highly
            functional websites that elevate brands and enhance user
            experiences. We combine innovative graphic design with expert web
            development to deliver tailored solutions that meet our clients
            unique needs. Our team of skilled designers and developers
            collaborates closely to ensure cohesive branding, responsive
            layouts, and optimal performance across all devices. Whether you’re
            a startup or an established business, we are dedicated to helping
            you establish a compelling online presence that drives engagement
            and growth.
          </p>
        </div>
      </div>
      <div className="container py-10 px-5">
        <div className="text-center my-5">
          <h3 className="text-3xl text-black font-bold">
            ZamZam Devs at A Glance
          </h3>
        </div>
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="grid gap-5">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={ProjectPhoto}
                alt="Project Title"
                className="duration-500 hover:scale-105"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={ProjectPhoto}
                  alt="Project Title"
                  className="duration-500 hover:scale-105"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={ProjectPhoto}
                  alt="Project Title"
                  className="duration-500 hover:scale-105"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={ProjectPhoto}
                  alt="Project Title"
                  className="duration-500 hover:scale-105"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={ProjectPhoto}
                  alt="Project Title"
                  className="duration-500 hover:scale-105"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={ProjectPhoto}
                alt="Project Title"
                className="duration-500 hover:scale-105"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-10 px-5">
        <div className="text-center my-5">
          <h3 className="text-3xl text-black font-bold">
            Why You Should Hire Us?
          </h3>
          <p className="max-w-[500px] mx-auto text-sm">
            Because we care and try to provide the best customer satisfaction.
            If you become a customer of RajTech, you will enjoy the following
            advantages:
          </p>
        </div>
      </div>
      <div className="container py-10 px-5">
        <div className="text-center my-5">
          <h3 className="text-3xl text-black font-bold">
            Our Happy Clients Feedback
          </h3>
          <p className="text-sm">Try To Understand Users Expectation</p>
        </div>
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Animated animateClass="animate__fadeInLeft">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-7 bg-white p-8 shadow-lg rounded-2xl">
              <div className="relative">
                <div className="size-24 absolute z-10 top-0 right-0 rounded-full border-4 overflow-hidden border-gray-50">
                  <Image src={ClientPhoto} alt="Client Photo" />
                </div>
                <div className="size-24 mt-3 mr-3 rounded-2xl bg-lime-500 -rotate-[12deg]"></div>
              </div>
              <div>
                <h4 className="text-xl text-black font-medium">
                  Sarowar Hazary Polash
                </h4>
                <span>Founder and CEO : OVIZAN</span>
                <p className="my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex items-start gap-2">
                  <StarRating rating={5} />
                </div>
              </div>
            </div>
          </Animated>
          <Animated animateClass="animate__fadeInRight">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-7 bg-white p-8 shadow-lg rounded-2xl">
              <div className="relative">
                <div className="size-24 absolute z-10 top-0 right-0 rounded-full border-4 overflow-hidden border-gray-50">
                  <Image src={ClientPhoto} alt="Client Photo" />
                </div>
                <div className="size-24 mt-3 mr-3 rounded-2xl bg-lime-500 -rotate-[12deg]"></div>
              </div>
              <div>
                <h4 className="text-xl text-black font-medium">
                  Sarowar Hazary Polash
                </h4>
                <span>Founder and CEO : OVIZAN</span>
                <p className="my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex items-start gap-2">
                  <StarRating rating={5} />
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
      <div className="container py-10 px-5">
        <div className="w-full md:w-3/4 text-center bg-black mx-auto p-10 rounded-2xl">
          <h3 className="text-3xl text-white font-medium">
            Have any question about us or get a product request?
          </h3>
          <h4 className="text-2xl text-gray-300">
            Dont hesitate to contact us
          </h4>
          <div className="mt-10">
            <Link
              className="px-8 py-3 font-normal bg-gray-100 hover:bg-gray-200 rounded-full"
              href="https://wa.me/+8801716426093?text=Assalamu%20Alaikum"
            >
              Request For Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
