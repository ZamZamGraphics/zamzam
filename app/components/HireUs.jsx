import { IconCloudCog, IconMessage, IconCloudCheck } from '@tabler/icons-react';

function HireUs() {
    return (
        <div className="container py-10 px-5">
            <div className="text-center my-5">
                <h3 className="text-3xl text-black font-bold">
                    Why You Should Hire Us?
                </h3>
                <p className="max-w-[500px] mx-auto text-sm mb-10">
                    Because we care and try to provide the best customer satisfaction.
                    If you become a customer of RajTech, you will enjoy the following
                    advantages:
                </p>
            </div>
            <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className='flex items-center'>
                    <span className='bg-lime-500 text-white p-5 rounded-s-2xl'>
                        <IconCloudCog stroke={1.5} className='size-10' />
                    </span>
                    <div className='py-3 px-8 bg-white shadow-lg rounded-2xl border border-gray-200'>
                        <h4 className='text-xl text-black font-semibold'>
                            Long Experience
                        </h4>
                        <p>
                            We are working in the local and global markets since 2015.
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='bg-blue-700 text-white p-5 rounded-s-2xl'>
                        <IconMessage stroke={1.5} className='size-10' />
                    </span>
                    <div className='py-3 px-8 bg-white shadow-lg rounded-2xl border border-gray-200'>
                        <h4 className='text-xl text-black font-semibold'>
                            Quick Support
                        </h4>
                        <p>
                            We provide runtime support to our customers support.
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='bg-lime-500 text-white p-5 rounded-s-2xl'>
                        <IconCloudCheck stroke={1.5} className='size-10' />
                    </span>
                    <div className='py-3 px-8 bg-white shadow-lg rounded-2xl border border-gray-200'>
                        <h4 className='text-xl text-black font-semibold'>
                            Fast Delivery
                        </h4>
                        <p>
                            We are 100% dedicated to the customer project deadline.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireUs
