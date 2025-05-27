'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hazary from "@/public/images/hazary.jpg";
import shimanto from "@/public/images/shimanto.jpg";
import monju from "@/public/images/monju.jpg";
import Client from "./Client";
import Slider from "react-slick";


function HappyClients() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container py-10 px-10">
            <div className="text-center my-5">
                <h3 className="text-3xl text-black font-bold">
                    Our Happy Clients Feedback
                </h3>
                <p className="text-sm">Try To Understand Users Expectation</p>
            </div>
            <Slider {...settings}>
                <Client
                    name="Shimanto Khokon"
                    title="Founder and CEO : Tepantor"
                    photo={shimanto}
                    opinion="From the start, ZamZam Graphics was responsive and professional. They understood our vision for a dynamic news website and delivered exactly what we needed — on time and on budget. It’s rare to find a development partner who just 'gets it'."
                    rating={5}
                />
                <Client
                    name="Manjurur Rahman"
                    title="Founder and CEO : AL MADINA IT"
                    photo={monju}
                    opinion="We’re thrilled with our new website! The design is clean, modern, and user-friendly. Our customers have already commented on how easy it is to navigate. The team was responsive to our feedback and made the process smooth from start to finish."
                    rating={5}
                />
                <Client
                    name="Sarowar Hazary Polash"
                    title="Founder and CEO : OVIZAN"
                    photo={hazary}
                    opinion="From the start, ZamZam Graphics was responsive and professional. They understood our vision for a dynamic news website and delivered exactly what we needed — on time and on budget. It’s rare to find a development partner who just 'gets it'."
                    rating={5}
                />
            </Slider>
        </div>
    )
}

export default HappyClients
