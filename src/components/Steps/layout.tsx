"use client";

import { steps } from "@/app/utilis/constants";
import Slider from "react-slick";

export default function Steps() {
    function NextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
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
                {/* <div className="flex h-full align-middle">
                    <ArrowButton
                        nextCard={nextStep}
                        prevCard={prevStep}
                        activeImage={activeImage}
                    />
                </div> */}
            </div>
            <div className="p-2">
                <Slider className="flex w-full h-full p-2" {...settings}>
                    {steps.map((text, idx) => (
                        <div key={idx} className="text-sm items-center p-2">
                            <div className="bg-gray-200 h-80 w-full p-4 flex flex-shrink-0 flex-col align-middle shadow-lg rounded-lg">
                                <h1 className="font-bold text-lg font-montserrat pb-3">
                                    {text.title}
                                </h1>
                                <h1 className="font-bold text-lg font-montserrat capitalize pb-2">
                                    {text.desc}
                                </h1>
                                <div className="flex-grow flex flex-col justify-center pb-4 text-sm">
                                    <p className="text-gray-500">{text.note}</p>
                                </div>
                                <p className="text-gray-500">{text.note2}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
