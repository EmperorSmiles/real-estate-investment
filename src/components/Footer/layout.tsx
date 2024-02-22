import React from "react";

export default function Footer() {
    return (
        <div className="bg-gray-100 h-full flex flex-col">
            <div className="flex justify-between p-8">
                <ul>
                    <li className="font-bold pb-1">FEATURES</li>
                    <li className="pb-1">How it Works</li>
                    <li className="pb-1">For Teams</li>
                    <li className="pb-1">Template</li>
                </ul>
                <ul>
                    <li className="font-bold pb-1">COMPANY</li>
                    <li className="pb-1">About Us</li>
                    <li className="pb-1">Careers</li>
                    <li className="pb-1">Blog</li>
                </ul>
                <ul>
                    <li className="font-bold pb-1">RESOURCES</li>
                    <li className="pb-1">Download Apps</li>
                    <li className="pb-1">Help Center</li>
                    <li className="pb-1">Productivity Methods</li>
                </ul>
                <ul>
                    <li>FEATURES</li>
                    <li>How it Works</li>
                    <li>For Teams</li>
                    <li>Template</li>
                </ul>
            </div>
            <div className="bg-slate-200">Copyright</div>
        </div>
    );
}
