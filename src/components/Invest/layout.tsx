import React from "react";
import background from "../../../public/BGimage.png";
import Image from "next/image";

export default function layout() {
    return (
        <div className="relative bg-cover bg-center h-96 flex items-center justify-center overflow-hidden">
            <Image
                src={background}
                alt="Hero"
                height={900}
                width={500}
                quality={100}
                priority
                className="object-cover h-full w-full z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-200 opacity-80 z-10">
                <h1 className="absolute flex -bottom-2.5 font-montserrat text-7xl justify-center items-center mix-blend-screen bg-white z-10">
                    INTELLIVEST
                </h1>
            </div>
            {/* <h1 className="absolute flex z-10 -bottom-2.5 font-montserrat text-7xl justify-center items-center bg-white mix-blend-normal">
                INTELLIVEST
            </h1> */}
            <div className="absolute inset-0 top-14 left-24 flex flex-col items-center justify-center text-center px-4 z-10">
                <p className="font-montserrat text-5xl text-center">
                    Unlock Your Dream Home Today!
                </p>
                <p className="text-xl text-center mt-6">
                    Join us on the journey to home ownership and discover the
                    perfect place to call your own.
                </p>
                <button className="bg-transparent rounded-xl border-2 border-gray-700 text-gray-700 text-xs lg:text-sm h-8 hover:bg-gray-800 hover:text-white lg:w-56 my-4 lg:my-8 ">
                    Find Out More
                </button>
            </div>
        </div>
    );
}
