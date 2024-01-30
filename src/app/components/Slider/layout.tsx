import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="p-4 flex-col">
            <div className="flex gap-4 mb-4 relative transition-transform ease-in-out duration-500">
                {items.map((img, idx) => (
                    <div key={idx}>
                        <Image
                            src={img.src}
                            alt=""
                            width={500}
                            height={100}
                            priority
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
            </div>
        </div>
    );
}
