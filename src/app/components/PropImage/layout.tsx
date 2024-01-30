import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function PropImage() {
    return (
        <div className="w-full h-full overflow-hidden p-2">
            <div className="flex gap-6">
                {items.map((img, idx) => (
                    <div key={idx} className="w-64 flex-shrink-0 relative">
                        <Image
                            src={img.src}
                            alt=""
                            height={700}
                            width={400}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-600 opacity-70"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
