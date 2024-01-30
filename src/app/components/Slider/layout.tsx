import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="p-4 flex-col w-full">
            <div className="flex gap-4 mb-4 relative transition-transform ease-in-out duration-500 overflow-auto">
                {items.map((img, idx) => (
                    <div key={idx} className="relative">
                        <Image
                            src={img.src}
                            alt=""
                            width={900}
                            height={700}
                            priority
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-600 opacity-70"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
