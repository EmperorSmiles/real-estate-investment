import { testimonials } from "@/app/utilis/constants";
import Image from "next/image";

export default async function layout() {
    return (
        <div className="bg-slate-200 h-full p-8">
            <div className="flex gap-6 h-full shrink-0 overflow-auto p-4">
                {testimonials.map((instance, idx) => (
                    <div
                        key={idx}
                        className="w-full flex-shrink-0 h-full shadow-md rounded-md p-4 mx-4"
                    >
                        <h1 className="capitalize font-roboto font-bold text-3xl">
                            Our testimony
                        </h1>

                        <h1 className="p-2 font-roboto italic font-bold text-2xl w-full pl-64 pb-4">
                            {instance.text}
                        </h1>

                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <Image
                                    alt="profile"
                                    src={instance.picture}
                                    width={500}
                                    height={500}
                                    className="rounded-full w-10 h-10 row-span-2"
                                />
                                <div>
                                    <p className="font-bold text-gray-800">
                                        {instance.name}
                                    </p>
                                    <p className="text-gray-600">
                                        {instance.location}
                                    </p>
                                </div>
                            </div>
                            <div>{instance.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
