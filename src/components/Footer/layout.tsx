import React from "react";

export default function Footer() {
    return (
        <div className="bg-gray-100 h-full flex flex-col p-8">
            <div className="flex justify-between">
                <ul>
                    <li className="font-bold">FEATURES</li>
                    <li>How it Works</li>
                    <li>For Teams</li>
                    <li>Template</li>
                </ul>
                <ul>
                    <li className="font-bold">COMPANY</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li className="font-bold">RESOURCES</li>
                    <li>Download Apps</li>
                    <li>Help Center</li>
                    <li>Productivity Methods</li>
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
