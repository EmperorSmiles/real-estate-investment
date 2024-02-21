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
            <div className="absolute inset-0">
                <p>Unlock Your Dream Home Today!</p>
                <p>Join us on the journey to home ownership</p>
            </div>
        </div>
    );
}
