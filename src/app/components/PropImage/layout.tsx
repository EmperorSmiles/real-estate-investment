import { items } from "@/app/utilis/constants";
import Image from "next/image";
import Description from "../Description/layout";

export default function PropImage() {
    return (
        <div className="w-full h-full overflow-hidden p-2 grid">
            <div className="flex gap-6">
                {items.map((item, idx) => (
                    <div key={idx} className="w-64 flex-shrink-0 relative">
                        <div className="mb-2">
                            <Image
                                src={item.src}
                                alt=""
                                height={700}
                                width={400}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {item && (
                            <div className="bg-gradient-to-b from-gray-600 to-gray-600 opacity-70 p-2 text-white">
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
