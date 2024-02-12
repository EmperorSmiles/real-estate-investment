"use client";
import React, { useState } from "react";
import { faqs } from "@/app/utilis/constants";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FAQ {
    topic: string;
    answer: string;
    p2: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const isExpanded = (index: number) => expandedIndex === index;

    return (
        <div className="bg-gray-100 h-full p-8 grid grid-cols-3">
            <h1 className="capitalize font-roboto font-bold text-3xl">
                Top Questions Answered
            </h1>
            <div className="col-span-2">
                {faqs.map((content, idx) => (
                    <div key={idx}>
                        <div>
                            <div className="flex items-center justify-between py-4 align-middle border-b-4">
                                <div className="font-bold font-roboto">
                                    {content.topic}
                                </div>
                                <button
                                    onClick={() => handleToggle(idx)}
                                    className={`ml-2 p-2 rounded-full ${
                                        isExpanded(idx)
                                            ? "bg-gray-800 text-white"
                                            : "border-2 border-gray-700 hover:bg-gray-800 text-gray-700 hover:text-white"
                                    }`}
                                >
                                    {isExpanded(idx) ? <FaMinus /> : <FaPlus />}
                                </button>
                            </div>
                        </div>
                        {isExpanded(idx) && (
                            <div className="py-8 transition-all duration-1000 ease-in-out text-gray-700">
                                <p className="mb-4">{content.answer}</p>
                                <p className="+">{content.p2}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
