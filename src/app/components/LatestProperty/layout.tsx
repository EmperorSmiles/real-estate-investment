"use client";
import ArrowButton from "@/app/components/ArrowButtons/layout";
import Slider from "../Slider/layout";
// import DarkGray from "../../../../public/DarkGray.jpg";
// import Lovely from "../../../../public/Lovely Archi.jpg";
// import Gray from "../../../../public/Gray .jpg";
// import WithFlowers from "../../../../public/With flowers.jpg";

export default function LatestProperty() {
    // Corrected: Use the Carousel component directly
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    // };

    // const prevSlide = () => {
    //     setCurrentIndex(
    //         (prevIndex) => (prevIndex - 1 + items.length) % items.length
    //     );
    // };
    // const items = [
    //     {
    //         content: <FaInstagram />,
    //         spacing: "mb-4",
    //         url: "https://www.instagram.com",
    //         id: 1,
    //     },
    //     {
    //         content: <FaXTwitter />,
    //         spacing: "mb-4",
    //         url: "https://www.twitter.com",
    //         id: 2,
    //     },
    //     {
    //         content: <FaFacebookF />,
    //         spacing: "mb-4",
    //         url: "https://www.facebook.com",
    //         id: 3,
    //     },
    //     {
    //         content: <FaYoutube />,
    //         url: "https://youtube.com",
    //         id: 4,
    //     },
    // ];

    return (
        <div className="bg-slate-200 h-full p-8">
            <h1 className="text-3xl font-bold font-roboto">Latest Property</h1>
            <div className="flex mt-8">
                <p className="mr-8 text-sm">
                    Explore our high-end projects tailored for both investors
                    and individuals. With a deep understanding of the Luxembourg
                    market, our real estate agency has expanded its reach and is
                    proud to offer a diverse selection of quality properties,
                    catering to various tastes and budgets
                </p>
                <ArrowButton />
            </div>
            <Slider />
        </div>
    );
}
