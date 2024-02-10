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
            <div>Top Questions Answered</div>
            <div className="col-span-2">
                {faqs.map((content, idx) => (
                    <div key={idx} className="">
                        <div className="cursor-pointer">
                            <div className="flex items-center justify-between py-4 align-middle border-b-4">
                                <div className="font-bold">{content.topic}</div>
                                <button
                                    onClick={() => handleToggle(idx)}
                                    className={`ml-2 p-2 rounded-full ${
                                        isExpanded(idx)
                                            ? "bg-black text-white"
                                            : "bg-gray-300 text-black"
                                    }`}
                                >
                                    {isExpanded(idx) ? <FaMinus /> : <FaPlus />}
                                </button>
                            </div>
                        </div>
                        {isExpanded(idx) && (
                            <div className="py-8 transition-all duration-5000 ease-linear">
                                <p className="mb-4 opacity-100">
                                    {content.answer}
                                </p>
                                <p className="opacity-80">{content.p2}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
