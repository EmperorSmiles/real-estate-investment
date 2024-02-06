import Image from "next/image";
import Realtor from "../../../../public/Realtor+Client.jpg";

export default function Body() {
    return (
        <div className="w-full h-full flex p-8 bg-gray-100">
            <div className="lg:w-2/3 h-full lg:h-96 flex flex-col justify-between px-4 lg:px-12 font-sans">
                <h2 className=" text-sm lg:text-4xl font-bold text-gray-700">
                    Affordable Property Investment in Singapore
                </h2>
                <p className="italic text-gray-500 text-xs lg:text-sm h-44 overflow-clip  text-ellipsis lg:h-full py-4 ">
                    With Singapore property prices growing over 60% within the
                    last 10 years*, the dream of owning a home continues to be a
                    dream for many. That&apos;s why we created IntelliVest. We
                    enable you to invest in the property market with as little
                    as $250 in as fast as a few minutes from signup to purchase
                </p>
                <small className="italic font-extralight text-gray-500 capitalize text-xs lg:text-base pt-4">
                    corelogic hedonic index singapore, sept 2023, October 2013 -
                    October 2023
                </small>
                {/* <CallToAction text="Find Out More" /> */}
                <button className="bg-transparent rounded-xl border-2 border-gray-700 text-gray-700 h-8 lg:m hover:bg-gray-800 hover:text-white w-full lg:w-96 my-8">
                    Find Out More
                </button>
            </div>
            <div className="w-1/3 px-12">
                <Image
                    src={Realtor}
                    alt="Realtor"
                    quality={100}
                    className="lh-96 "
                />
            </div>
        </div>
    );
}
