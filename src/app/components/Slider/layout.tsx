import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="w-full h-full overflow-auto p-4 grid my-4 ">
            <div className="flex gap-6 h-full">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-64 flex-shrink-0 h-full shadow-md rounded-md py-2"
                    >
                        <div className="relative">
                            <Image
                                src={item.src}
                                alt=""
                                priority
                                height={700}
                                width={500}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-600 opacity-70"></div>
                        </div>
                        {item && (
                            <div className="p-2 w-full h-14 text-gray-600">
                                <div className="flex">
                                    <h1 className=" font-bold pr-3">
                                        {item.city}
                                    </h1>
                                    <p className="italic">{item.areaCode}</p>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="flex pr-1">
                                        <p className="pr-2 flex-nowrap">
                                            {item.desc1}
                                        </p>
                                        <p className="font-bold">
                                            {item.netIncome}
                                        </p>
                                    </span>
                                    <span className="flex ">
                                        <p className="pr-1 flex-nowrap text-xs">
                                            {item.desc2}
                                        </p>
                                        <p className="font-bold">
                                            {item.netYield}
                                        </p>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
