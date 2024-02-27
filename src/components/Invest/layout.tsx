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
            <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-200 opacity-70 z-10">
                <h1 className="absolute flex inset-80 -bottom-6 font-montserrat text-9xl items-center mix-blend-normal z-10 font-extrabold text-justify justify-center">
                    INTELLIVEST
                </h1>
            </div>
            <div className="absolute flex flex-col items-center justify-center z-10 p-2">
                <p className="font-montserrat text-2xl md:text-4xl lg:text-5xl text-center">
                    Unlock Your Dream Home Today!
                </p>
                <p className="sm:text-lg md:text-xl lg:text-xl text-center mt-6">
                    Join us on the journey to home ownership and discover the
                    perfect place to call your own.
                </p>
                <button className="bg-transparent rounded-xl border-2 border-gray-700 text-gray-700 text-xs lg:text-sm h-8 w-24 hover:bg-gray-800 hover:text-white lg:w-56 my-4 lg:my-8 ">
                    Find Out More
                </button>
            </div>
        </div>
    );
}
