"use client";

import ArrowButton from "@/app/components/ArrowButtons/layout";
import { steps } from "@/app/utilis/constants";
import { useLatestProperty } from "@/app/context/Context";

export default function Steps() {
    const { activeImage, currentStepIndex, nextStep, prevStep } =
        useLatestProperty();

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
                    <ArrowButton
                        nextCard={nextStep}
                        prevCard={prevStep}
                        activeImage={activeImage}
                    />
                </div>
            </div>
            <div
                className="flex"
                style={{ transform: `translateX(${-currentStepIndex * 20}%)` }}
            >
                {steps.map((text, idx) => (
                    <div key={idx} className="p-2 text-sm">
                        <div
                            className={`flex-col h-64 p-4 ${
                                currentStepIndex !== idx
                                    ? "bg-gray-200"
                                    : "bg-gray-800 text-white"
                            } shadow-md justify-between w-80 flex-shrink-0`}
                        >
                            <h1 className="font-bold text-lg font-montserrat pb-3">
                                {text.title}
                            </h1>
                            <h1 className="font-bold text-lg font-montserrat capitalize pb-2">
                                {text.desc}
                            </h1>
                            <div className="flex-grow flex flex-col justify-center pb-4">
                                <p className="text-gray-500">{text.note}</p>
                            </div>
                            <p className="text-gray-500">{text.note2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
