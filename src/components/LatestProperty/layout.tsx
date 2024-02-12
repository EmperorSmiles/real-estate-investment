"use client";
import ArrowButton from "../../components/ArrowButtons/layout";
import { useLatestProperty } from "../../app/context/Context";
import { useEffect } from "react";
import { items } from "@/app/utilis/constants";
import Image from "next/image";

export default function LatestProperty() {
    const { currentIndex, activeImage, nextCard, prevCard } =
        useLatestProperty();
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
            <div className="w-full h-full overflow-hidden p-4 my-4 ">
                <div
                    className="flex gap-6 h-full transition-transform"
                    style={{
                        transform: `translateX(${-currentIndex * 16.7}%)`,
                    }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-64 flex-shrink-0 h-full shadow-md rounded-md py-2"
                        >
                            <div className="relative">
                                <Image
                                    src={item.src}
                                    alt=""
                                    priority
                                    height={700}
                                    width={500}
                                    className="w-full h-80 object-cover"
                                />
                                {currentIndex !== idx && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 opacity-70"></div>
                                )}
                            </div>
                            {item && (
                                <div className="p-2 w-full h-14 text-gray-600">
                                    <div className="flex">
                                        <h1 className=" font-bold pr-3">
                                            {item.city}
                                        </h1>
                                        <p className="italic">
                                            {item.areaCode}
                                        </p>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="flex pr-1">
                                            <p className="pr-2 flex-nowrap">
                                                {item.desc1}
                                            </p>
                                            <p className="font-bold">
                                                {item.netIncome}
                                            </p>
                                        </span>
                                        <span className="flex ">
                                            <p className="pr-1 flex-nowrap text-xs">
                                                {item.desc2}
                                            </p>
                                            <p className="font-bold">
                                                {item.netYield}
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
