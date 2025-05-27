import StarRating from "@/app/components/StarRating";
import Image from "next/image";

function Client({ name, photo, title, opinion, rating }) {
    return (
        <div className="mx-5 flex flex-col md:flex-row items-start md:items-center gap-7 bg-white p-8 border border-gray-200 shadow-lg rounded-2xl">
            <div className="relative">
                <div className="size-24 absolute z-10 top-0 right-0 rounded-full border-4 overflow-hidden border-gray-50">
                    <Image src={photo} alt="Client Photo" />
                </div>
                <div className="size-24 mt-3 mr-3 rounded-2xl bg-lime-500 -rotate-[12deg]"></div>
            </div>
            <div>
                <h4 className="text-xl text-black font-medium">
                    {name}
                </h4>
                <span>{title}</span>
                <p className="my-4">{opinion}</p>
                <div className="flex items-start gap-2">
                    <StarRating rating={rating} />
                </div>
            </div>
        </div>
    )
}

export default Client
