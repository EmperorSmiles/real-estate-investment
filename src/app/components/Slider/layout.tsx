import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="p-4">
            <div className="flex">
                {items.map((img, idx) => (
                    <div key={idx}>
                        <Image
                            src={img.src}
                            alt=""
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
