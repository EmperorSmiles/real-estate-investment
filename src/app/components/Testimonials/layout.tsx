import { testimonials } from "@/app/utilis/constants";
import Image from "next/image";

export default async function layout() {
    return (
        <div className="bg-slate-200 h-full p-8">
            <div>
                <h1 className="capitalize font-roboto font-bold text-3xl">
                    Our testimony
                </h1>
                {testimonials.map((instance, idx) => (
                    <div key={idx} className="flex-col p-4">
                        <h1 className="font-roboto text-2xl pb-4">
                            {instance.text}
                        </h1>
                        <div className="flex">
                            <div className="">
                                <Image
                                    alt="profile"
                                    src={instance.picture}
                                    width={500}
                                    height={500}
                                    className="rounded-full w-10 h-10 row-span-2"
                                />
                                <div>{instance.name}</div>
                                <div>{instance.location}</div>
                            </div>
                            <div>{instance.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
