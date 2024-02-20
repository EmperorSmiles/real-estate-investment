"use client";

import ArrowButton from "../../components/ArrowButtons/layout";
import { steps } from "@/app/utilis/constants";
import { useLatestProperty } from "@/app/context/Context";
import { useEffect } from "react";
import Slider from "react-slick";

export default function Steps() {
    const { activeImage, currentStepIndex, nextStep, prevStep } =
        useLatestProperty();

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (activeImage) {
            interval = setInterval(() => {
                nextStep();
            }, 2000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [activeImage, nextStep]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 2561,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full h-full px-4 py-6 bg-gray-100 overflow-hidden">
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
            <Slider className="flex w-full h-full gap-4" {...settings}>
                {steps.map((text, idx) => (
                    <div key={idx} className="p-4 text-sm">
                        {/* <div
                                    className={`flex-col h-64 w-64 p-4 ${
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
                                </div> */}
                        <div className="bg-fuchsia-700 h-full w-full p-4">
                            <h1 className="font-bold text-lg font-montserrat pb-3">
                                {text.title}
                            </h1>
                            <h1 className="font-bold text-lg font-montserrat capitalize pb-2">
                                {text.desc}
                            </h1>
                            <div className="flex flex-col justify-center pb-4">
                                <p className="">{text.note}</p>
                            </div>
                            <p className="">{text.note2}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
