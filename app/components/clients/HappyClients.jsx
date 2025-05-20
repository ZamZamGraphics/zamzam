import Animated from "@/app/components/Animated";
import StarRating from "@/app/components/StarRating";
import Image from "next/image";
import ClientPhoto from "@/public/images/hazary.jpg";

function HappyClients() {
    return (
        <div className="container py-10 px-5">
            <div className="text-center my-5">
                <h3 className="text-3xl text-black font-bold">
                    Our Happy Clients Feedback
                </h3>
                <p className="text-sm">Try To Understand Users Expectation</p>
            </div>
            <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Animated animateClass="animate__fadeInLeft">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-7 bg-white p-8 border border-gray-200 shadow-lg rounded-2xl">
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
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-7 bg-white p-8 border border-gray-200 shadow-lg rounded-2xl">
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
    )
}

export default HappyClients
