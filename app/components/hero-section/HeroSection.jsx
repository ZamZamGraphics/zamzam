import Animated from "@/app/components/Animated";
import Image from "next/image";
import WebdevPhoto from "@/public/images/webdev.png";

function HeroSection() {
    return (
        <div className="container py-10 sm:py-32">
            <div className="flex w-full gap-10 flex-col md:flex-row items-center">
                <div className="basis-2/4 px-5">
                    <Animated animateClass="animate__fadeInLeft">
                        <span className="text-xl font-medium text-green-700">
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
    )
}

export default HeroSection
