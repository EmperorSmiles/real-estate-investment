"use client";

import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import DarkGray from "../../../../public/DarkGray.jpg";
import Lovely from "../../../../public/Lovely Archi.jpg";
import Gray from "../../../../public/Gray .jpg";
import WithFlowers from "../../../../public/With flowers.jpg";

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
    // const items = [
    //     {
    //         content: <FaInstagram />,
    //         spacing: "mb-4",
    //         url: "https://www.instagram.com",
    //         id: 1,
    //     },
    //     {
    //         content: <FaXTwitter />,
    //         spacing: "mb-4",
    //         url: "https://www.twitter.com",
    //         id: 2,
    //     },
    //     {
    //         content: <FaFacebookF />,
    //         spacing: "mb-4",
    //         url: "https://www.facebook.com",
    //         id: 3,
    //     },
    //     {
    //         content: <FaYoutube />,
    //         url: "https://youtube.com",
    //         id: 4,
    //     },
    // ];
    const items = [
        {
            src: "public/DarkGray.jpg",
            city: "North Melborune",
            areaCode: "NMLO1",
            desc1: "Net Income",
            netIncome: "$360,000",
            desc2: "Net Yield",
            netTield: "6.4%",
            id: 1,
        },
        {
            src: "public/Lovely Archi.jpg",
            city: "Frankston Orca",
            areaCode: "ARNO1",
            desc1: "Net Income",
            netIncome: "$240,000",
            desc2: "Net Yield",
            netTield: "5.3%",
            id: 2,
        },
        {
            src: "public/Gray .jpg",
            city: "Potts Points Carnige",
            areaCode: "CNG01",
            desc1: "Net Income",
            netIncome: "$320,000",
            desc2: "Net Yield",
            netTield: "6.4%",
            id: 3,
        },
        {
            src: "public/With flowers.jpg",
            city: "Kreuzberg, Berlin",
            areaCode: "BLN01",
            desc1: "Net Income",
            netIncome: "$240,000",
            desc2: "Net Yield",
            netTield: "5.3%",
            id: 4,
        },
    ];

    return (
        <div className="bg-slate-200 h-full p-8">
            <h1 className="text-3xl font-bold font-roboto">Latest Property</h1>
            <div className="flex mt-8">
                <p className="mr-8 text-sm">
                    Explore our high-end projects tailored for both investors
                    and individuals. With a deep understanding of the Luxembourg
                    market, our real estate agency has expanded its reach and is
                    proud to offer a diverse selection of quality properties,
                    catering to various tastes and budgets
                </p>
                <div className="flex h-full align-middle">
                    <button className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white">
                        <FaArrowLeft />
                    </button>
                    <button className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div>{}</div>
        </div>
    );
}
