import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="p-4 h-full">
            <div className="flex gap-4 mb-4 relative">
                {items.map((img, idx) => (
                    <div key={idx}>
                        <Image
                            src={img.src}
                            alt=""
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
            </div>
        </div>
    );
}
