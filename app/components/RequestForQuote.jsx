import Link from "next/link"
import { IconBrandWhatsapp } from '@tabler/icons-react';
import Animated from "./Animated";

function RequestForQuote() {
    return (
        <div className="container py-10 px-5">
            <Animated classes="w-full md:w-3/4 text-center bg-black mx-auto p-10 rounded-2xl" animateClass="animate__zoomIn">
                <h3 className="text-3xl text-white font-medium">
                    Have any question about us or get a product request?
                </h3>
                <h4 className="text-2xl text-gray-300">
                    Dont hesitate to contact us
                </h4>
                <div className="mt-10 flex justify-center">
                    <Link
                        className="flex items-center justify-center gap-2 py-1 px-3 sm:px-8 sm:py-3 font-normal text-base sm:text-xl text-black bg-gray-100 hover:bg-gray-200 rounded-full"
                        href="https://wa.me/+8801716426093?text=Assalamu%20Alaikum"
                    >
                        <span><IconBrandWhatsapp stroke={2} className="size-6 sm:size-8 text-green-700" /></span>
                        Request For Quote
                    </Link>
                </div>
            </Animated>
        </div>
    )
}

export default RequestForQuote
