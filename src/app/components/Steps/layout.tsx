import ArrowButton from "@/app/components/ArrowButtons/layout";
import { steps } from "@/app/utilis/constants";

export default function Steps() {
    return (
        <div className="w-full h-full px-4 py-6 bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-700 font-roboto mb-4">
                5 Steps to the First Investment
            </h1>
            <div className="flex justify-between p-2">
                <p className="w-[70vw] text-gray-500 text-sm ">
                    Embarking on your investment journey can be a thrilling and
                    rewarding experience. Let&apos;s walk you through the
                    fundamentals steps to kickstart your investment portfolio
                    with confidence
                </p>
                <div className="flex h-full align-middle">
                    <ArrowButton />
                </div>
            </div>
            <div className="flex overflow-clip">
                {steps.map((text, idx) => (
                    <div key={idx} className=" p-2 text-sm">
                        <div className="flex-col w-72 h-72 p-4 bg-gray-200 shadow-md justify-between">
                            <h1 className="font-bold text-lg font-montserrat pb-3">
                                {text.title}
                            </h1>
                            <h1 className="font-bold text-lg font-montserrat capitalize pb-2">
                                {text.desc}
                            </h1>
                            <div className="flex-col justify-around">
                                <p className="text-gray-500 pb-4">
                                    {text.note}
                                </p>
                                <p className="text-gray-500">{text.note2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
