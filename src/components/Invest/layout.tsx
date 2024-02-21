import React from "react";
import background from "../../../public/BGimage.png";
import Image from "next/image";

export default function layout() {
    return (
        <div className="relative bg-cover bg-center h-96">
            <Image
                src={background}
                alt="Hero"
                height={900}
                width={500}
                quality={100}
                priority
                className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-200 opacity-70"></div>
            <div className="absolute inset-0 top-14 left-56">
                <p className="font-montserrat">Unlock Your Dream Home Today!</p>
                <p>
                    Join us on the journey to home ownership and discover the
                    perfect place to call your own.
                </p>
                <button className="bg-transparent rounded-xl border-2 border-gray-700 text-gray-700 text-xs lg:text-sm h-8 lg:m hover:bg-gray-800 hover:text-white w-60 lg:w-56 my-4 lg:my-8">
                    Find Out More
                </button>
            </div>
        </div>
    );
}