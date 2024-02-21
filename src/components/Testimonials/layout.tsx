"use client";

import { testimonials } from "@/app/utilis/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function TestimonialsSlider() {
    // const [currentIndex, setCurrentIndex] = useState(0);

    function NextArrow(props: any) {
        const {} = props;
        return <div style={{ display: "none" }} />;
    }

    function PrevArrow(props: any) {
        const {} = props;
        return <div style={{ display: "none" }} />;
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 2561,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
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
        <div className="bg-slate-200 h-full p-8">
            <Slider {...settings}>
                {testimonials.map((instance, idx) => (
                    <div key={idx} className="p-2">
                        <h1 className="capitalize font-roboto font-bold text-lg lg:text-3xl">
                            Our testimony
                        </h1>
                        <h1 className="p-2 font-roboto italic font-bold text-sm lg:text-2xl w-full lg:pl-64 pb-4">
                            {instance.text}
                        </h1>
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm">
                                <Image
                                    alt="profile"
                                    src={instance.picture}
                                    width={500}
                                    height={500}
                                    className="rounded-full w-10 h-10 row-span-2"
                                />
                                <div className="text-sm flex-col">
                                    <p className="font-bold text-gray-800">
                                        {instance.name}
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        {instance.location}
                                    </p>
                                </div>
                            </div>
                            <div className="text-xs">{instance.rating}</div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className="flex gap-6 h-full overflow-hidden shrink-0 p-2 lg:p-4">
                        {testimonials.map((instance, idx) => (
                            <div
                                key={idx}
                                className="w-full flex-shrink-0 h-full shadow-md rounded-md p-4 mx-4 transform transition-transform"
                                style={isLarge ? forLargeScreens : forSmallScreens}
                            >
                                <h1 className="capitalize font-roboto font-bold text-lg lg:text-3xl">
                                    Our testimony
                                </h1>

                                <h1 className="p-2 font-roboto italic font-bold text-sm lg:text-2xl w-full lg:pl-64 pb-4">
                                    {instance.text}
                                </h1>

                                <div className="flex justify-between">
                                    <div className="flex gap-2 text-sm">
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
                    </div> */}
        </div>
    );
}
