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

    return (
        <div className="bg-gray-100 h-full p-8 grid grid-cols-3">
            <div>Top Questions Answered</div>
            <div className="col-span-2">
                {faqs.map((content, idx) => (
                    <div key={idx} className="">
                        <div
                            className="cursor-pointer"
                            onClick={() => handleToggle(idx)}
                        >
                            <div className="font-bold">{content.topic}</div>
                            <button>
                                <FaPlus />
                            </button>
                            <button>
                                <FaMinus />
                            </button>
                        </div>
                        {expandedIndex === idx && (
                            <div className="py-8 transition-all">
                                <p>{content.answer}</p>
                                <p>{content.p2}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
