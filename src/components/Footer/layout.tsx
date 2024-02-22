import React from "react";

export default function Footer() {
    return (
        <div className="bg-gray-100 h-full flex flex-col">
            <div className="lg:flex justify-between p-8 text-gray-700">
                <ul className="mb-4">
                    <li className="font-bold pb-1 text-black">FEATURES</li>
                    <li className="pb-1">How it Works</li>
                    <li className="pb-1">For Teams</li>
                    <li className="pb-1">Template</li>
                </ul>
                <ul className="mb-4">
                    <li className="font-bold pb-1 text-black">COMPANY</li>
                    <li className="pb-1">About Us</li>
                    <li className="pb-1">Careers</li>
                    <li className="pb-1">Blog</li>
                </ul>
                <ul className="mb-4">
                    <li className="font-bold pb-1 text-black">RESOURCES</li>
                    <li className="pb-1">Download Apps</li>
                    <li className="pb-1">Help Center</li>
                    <li className="pb-1">Productivity Methods</li>
                </ul>
                <div>
                    <h1 className="text-black font-bold">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h1>
                    <p>Latest news updates sent to your inbox</p>
                    <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Enter Your Email"
                        className="bg-transparent border-2 border-gray-600"
                    />
                </div>
            </div>
            <div className="bg-slate-200">Copyright</div>
        </div>
    );
}
