"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav
            // className={`bg-transparent text-gray-300 font-open_sans absolute inset-x-0 top-0 z-30`}
            className={` ${
                scrolled
                    ? "fixed top-0 left-0 w-full z-30 bg-black shadow-md transition-all duration-300 text-gray-300 shadow-slate-900"
                    : "bg-transparent text-gray-300 font-open_sans absolute inset-x-0 top-0 z-30"
            }`}
        >
            <div className="flex justify-between lg:justify-around p-3 items-center ">
                <h1 className="text-lg font-bold">
                    Intelli
                    <span className="text-indigo-500 font-extrabold">V</span>est
                </h1>
                <div className="lg:hidden text-2xl">
                    <FaBars onClick={toggleDrawer} />
                </div>

                <ul className="hidden lg:flex space-x-3 text-sm">
                    <li className="hover:text-indigo-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-indigo-500">
                        <Link href="header">How it Works</Link>
                    </li>
                    <li className="hover:text-indigo-500">
                        <Link href="#">Smart Property Investing</Link>
                    </li>
                    <li className="hover:text-indigo-500">
                        <Link href="#">Market Insights</Link>
                    </li>
                    <li className="hover:text-indigo-500">
                        <Link href="#">Market Insights</Link>
                    </li>
                    <li className="hover:text-indigo-500">
                        <Link href="#">FAQs</Link>
                    </li>
                </ul>
                <button className="bg-transparent rounded-3xl border-gray-300 border-2 px-2 hover:border-indigo-500 hover:text-indigo-500 hidden lg:block">
                    Get Started
                </button>
            </div>
            {drawerOpen && (
                <div className="lg:hidden fixed inset-0 bg-gray-800 z-40">
                    <div className="flex justify-end p-4">
                        <FaTimes
                            onClick={toggleDrawer}
                            className="text-white text-2xl cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <Link
                            href="/"
                            onClick={toggleDrawer}
                            className="hover:text-indigo-500"
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            onClick={toggleDrawer}
                            className="hover:text-indigo-500"
                        >
                            How it Works
                        </Link>
                        <Link
                            href="#"
                            onClick={toggleDrawer}
                            className="hover:text-indigo-500"
                        >
                            Smart Property Investing
                        </Link>
                        <Link
                            href="#"
                            onClick={toggleDrawer}
                            className="hover:text-indigo-500"
                        >
                            Market Insights
                        </Link>
                        <Link
                            href="#"
                            onClick={toggleDrawer}
                            className="hover:text-indigo-500"
                        >
                            FAQs
                        </Link>
                        <button
                            className="bg-transparent rounded-3xl border-gray-300 border-2 px-2 mt-4 hover:border-indigo-500 hover:text-indigo-500"
                            onClick={toggleDrawer}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

NavBar.propTypes = {
    toggleDrawer: PropTypes.func,
};
