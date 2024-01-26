"use client";

import React, { useState } from "react";
import DarkGray from "../../../../public/DarkGray.jpg";

const Carousel = () => {
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
        { id: 1, content: "Item 1" },
        { id: 2, content: "Item 2" },
        { id: 3, content: "Item 3" },
        // Add more items as needed
    ];

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {items.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0">
                        <div className="h-64 bg-gray-300 p-4 m-2 rounded-md">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between z-10">
                <button
                    onClick={prevSlide}
                    className="text-white bg-gray-600 px-4 py-2 rounded"
                >
                    Previous
                </button>
                <button
                    onClick={nextSlide}
                    className="text-white bg-gray-600 px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;
