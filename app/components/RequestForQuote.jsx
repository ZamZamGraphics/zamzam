import Link from "next/link"
import { IconBrandWhatsapp } from '@tabler/icons-react';

function RequestForQuote() {
    return (
        <div className="container py-10 px-5">
            <div className="w-full md:w-3/4 text-center bg-black mx-auto p-10 rounded-2xl">
                <h3 className="text-3xl text-white font-medium">
                    Have any question about us or get a product request?
                </h3>
                <h4 className="text-2xl text-gray-300">
                    Dont hesitate to contact us
                </h4>
                <div className="mt-10 flex justify-center">
                    <Link
                        className="flex items-center justify-center gap-2 px-8 py-3 font-normal text-xl text-black bg-gray-100 hover:bg-gray-200 rounded-full"
                        href="https://wa.me/+8801716426093?text=Assalamu%20Alaikum"
                    >
                        <span><IconBrandWhatsapp stroke={2} className="size-8 text-green-700" /></span>
                        Request For Quote
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RequestForQuote
