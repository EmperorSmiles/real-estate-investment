"use client";
import { items } from "@/app/utilis/constants";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export default function LatestProperty() {
    let sliderRef = useRef<Slider>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    function NextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "black" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "black" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className="bg-slate-200 h-full p-8 overflow-hidden">
            <h1 className="text-2xl lg:text-3xl font-bold font-roboto">
                Latest Property
            </h1>
            <div className="lg:flex mt-8">
                <p className="mr-8 text-xs lg:text-sm mb-4">
                    Explore our high-end projects tailored for both investors
                    and individuals. With a deep understanding of the Luxembourg
                    market, our real estate agency has expanded its reach and is
                    proud to offer a diverse selection of quality properties,
                    catering to various tastes and budgets
                </p>
                <div className="flex h-full ">
                    <button className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white">
                        <FaArrowLeft onClick={previous} />
                    </button>
                    <button className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white">
                        <FaArrowRight onClick={next} />
                    </button>
                </div>
            </div>
            <div>
                <Slider className="p-2" ref={sliderRef} {...settings}>
                    {items.map((item, idx) => (
                        <div key={idx} className="w-full h-full p-1">
                            <div className="bg-slate-200 p-2 h-84 rounded-lg shadow-xl">
                                <Image
                                    src={item.src}
                                    alt=""
                                    priority
                                    height={700}
                                    width={500}
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                                <div className="p-2 w-full text-gray-600 text-sm font-roboto">
                                    <div className="flex items-center justify-between">
                                        <h1 className="font-bold text-xs">
                                            {item.city}
                                        </h1>
                                        <h1 className="text-xs">
                                            {item.areaCode}
                                        </h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs pr-2">
                                            {item.desc1}
                                        </p>
                                        <p className="text-xs font-bold">
                                            {item.netIncome}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs">{item.desc2}</p>
                                        <p className="text-xs font-bold">
                                            {item.netYield}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
