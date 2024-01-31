import { items } from "@/app/utilis/constants";
import Image from "next/image";
import Description from "../Description/layout";

export default function PropImage() {
    return (
        <div className="w-full h-full overflow-auto p-2 grid">
            <div className="flex gap-6">
                {items.map((item, idx) => (
                    <div key={idx} className="w-64 flex-shrink-0 relative">
                        <Image
                            src={item.src}
                            alt=""
                            height={700}
                            width={500}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-600 opacity-70"></div>

                        {item && (
                            <div className="p-2 w-full">
                                <h1 className="text-xl font-bold">
                                    {item.city}
                                </h1>
                                <p>{item.areaCode}</p>
                                <p>{item.desc1}</p>
                                <p>{item.netIncome}</p>
                                <p>{item.desc2}</p>
                                <p>{item.netTield}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
