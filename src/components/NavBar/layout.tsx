"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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

    // const closeDrawer = () => {
    //     setDrawerOpen(false);
    // };

    return (
        <nav
            className={` ${
                scrolled
                    ? "fixed top-0 left-0 w-full z-30 bg-gray-800 shadow-md transition-all duration-500 font-open_sans text-gray-300 shadow-gray-800"
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
                <AnimatePresence>
                    <motion.div
                        key="drawer"
                        className="lg:hidden fixed inset-0 bg-gray-800 z-40"
                        initial={{ width: 1 }}
                        animate={{ width: "100%" }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        <div className="flex justify-end p-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: "-100%" }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <FaTimes
                                    onClick={toggleDrawer}
                                    className="text-white text-2xl cursor-pointer"
                                />
                            </motion.div>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            {[
                                { href: "/", text: "Home" },
                                { href: "#", text: "How it Works" },
                                { href: "#", text: "Smart Property Investing" },
                                { href: "#", text: "Market Insights" },
                                { href: "#", text: "FAQs" },
                            ].map((link, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={toggleDrawer}
                                        className="hover:text-indigo-500"
                                    >
                                        {link.text}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                                key="button"
                                className="bg-transparent rounded-3xl border-gray-300 border-2 px-2 mt-4 hover:border-indigo-500 hover:text-indigo-500"
                                onClick={toggleDrawer}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </nav>
    );
}

NavBar.propTypes = {
    toggleDrawer: PropTypes.func,
};
