"use client";

import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function LatestProperty() {
    // Corrected: Use the Carousel component directly
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    const items = [
        {
            content: <FaInstagram />,
            spacing: "mb-4",
            url: "https://www.instagram.com",
            id: 1,
        },
        {
            content: <FaXTwitter />,
            spacing: "mb-4",
            url: "https://www.twitter.com",
            id: 2,
        },
        {
            content: <FaFacebookF />,
            spacing: "mb-4",
            url: "https://www.facebook.com",
            id: 3,
        },
        {
            content: <FaYoutube />,
            url: "https://youtube.com",
            id: 4,
        },
    ];

    return (
        <div className="bg-slate-200 h-full p-8">
            <h1 className="text-3xl font-bold font-roboto">Latest Property</h1>
            <div className="flex p-8">
                <p className="w-full">
                    Explore our high-end projects tailored for both investors
                    and individuals. With a deep understanding of the Luxembourg
                    market, our real estate agency has expanded its reach and is
                    proud to offer a diverse selection of quality properties,
                    catering to various tastes and budgets
                </p>
                <div className="flex">
                    <button className="rounded-full border-2 border-black p-2 hover:bg-black hover:text-white">
                        <FaArrowLeft />
                    </button>
                    <button className="rounded-full border-2 border-black p-2 hover:bg-black hover:text-white">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            {/* <div
                className="carousel-items w-full"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {items.map((item) => (
                    <div key={item.id} className="carousel-item bg-green-500">
                        {item.content}
                    </div>
                ))}

                {items.map((item, id) => (
                    <a
                        target="_blank"
                        key={id}
                        className={`${item.spacing} border-2 p-2 rounded-full border-gray-300 hover:bg-indigo-500 w-full
                                    hover:text-black hover:border-black`}
                    >
                        {item.content}
                    </a>
                ))}
            </div>

            <div className="navigation">
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div> */}
        </div>
    );
}
