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
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-400 opacity-60"></div>
            ;
        </div>
    );
}
