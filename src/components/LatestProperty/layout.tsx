"use client";
import ArrowButton from "../../components/ArrowButtons/layout";
import { useLatestProperty } from "../../app/context/Context";
import { useEffect } from "react";
import { items } from "@/app/utilis/constants";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function LatestProperty() {
    const { currentIndex, activeImage, nextCard, prevCard } =
        useLatestProperty();

    const isLarge = typeof window !== "undefined" && window.innerWidth >= 760;

    // const CustomPrevArrow = ({ onClick }) => (
    //     <ArrowButton prevCard={prevCard} onClick={onClick} direction="prev" />
    // );

    // const CustomNextArrow = ({ onClick }) => (
    //     <ArrowButton nextCard={nextCard} onClick={onClick} direction="next" />
    // );

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        autoplay: true,
        prevArrow: (
            <button
                className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                onClick={prevCard}
            >
                <FaArrowLeft />
            </button>
        ),
        nextArrow: (
            <button
                className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                onClick={nextCard}
            >
                <FaArrowRight />
            </button>
        ),
        responsive: [
            {
                breakpoint: 2561,
                settings: {
                    slidesToShow: 5,
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
        <div className="bg-slate-200 h-full p-8">
            <h1 className="text-2xl lg:text-3xl font-bold font-roboto">
                Latest Property
            </h1>
            <div className="flex mt-8">
                <p className="mr-8  text-xs lg:text-sm">
                    Explore our high-end projects tailored for both investors
                    and individuals. With a deep understanding of the Luxembourg
                    market, our real estate agency has expanded its reach and is
                    proud to offer a diverse selection of quality properties,
                    catering to various tastes and budgets
                </p>
                <div className="flex h-full align-middle">
                    <ArrowButton
                        nextCard={nextCard}
                        prevCard={prevCard}
                        activeImage={activeImage}
                    />
                </div>
            </div>
            <div className="w-full h-full overflow-hidden p-4 my-4 bg-blacke">
                <Slider className="bg-orange5-500" {...settings}>
                    {items.map((item, idx) => (
                        <div key={idx} className="w-full h-full p-1">
                            <div className="bg-slate-200 p-2 h-84 rounded-lg shadow-xl">
                                <Image
                                    src={item.src}
                                    alt=""
                                    priority
                                    height={700}
                                    width={500}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-2 w-full text-gray-600 text-sm font-roboto">
                                    <div className="flex items-center">
                                        <h1 className="font-bold pr-2 text-xs">
                                            {item.city}
                                        </h1>
                                        <h1 className="text-xs">
                                            {item.areaCode}
                                        </h1>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs pr-2">
                                            {item.desc1}
                                        </p>
                                        <p className="text-xs font-bold">
                                            {item.netIncome}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs pr-2">
                                            {item.desc2}
                                        </p>
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
