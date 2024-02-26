import Image from "next/image";
import Investe from "../../../public/Investe-Group.png";
import Blackrock from "../../../public/BlackRock-logo.png";
import Glovo from "../../../public/Glovo_logo.png";
import Berkshire from "../../../public/Berkshire-Hathaway-Logo.png";
import Sujimoto from "../../../public/Sujimoto.png";
export default function About() {
    return (
        <>
            <div className="bg-slate-200 min-h-56 flex items-center justify-between p-4">
                <h1 className="sm:text-sm lg:text-4xl text-slate-900 text-center w-full pb-40 ">
                    Why Us
                </h1>
                <div className="flex flex-col">
                    <p className="mt-6 text-sm lg:text-2xl pr-2">
                        We are your trusted partner in the world of property
                        investment. With years of expertise and a deep
                        understanding of the real estate market, we help you
                        make informed investment decisions that aligns with your
                        goals
                    </p>
                    <div className="flex items-center justify-around pt-4">
                        <Image
                            src={Investe}
                            alt="Partners"
                            quality={100}
                            className="object-center w-14 h-full lg:w-28 lg:h-full grayscale pr-2 "
                        />
                        <Image
                            src={Blackrock}
                            alt="Partners"
                            quality={100}
                            className="object-center w-14 h-full lg:w-28 lg:h-full grayscale pr-2"
                        />
                        <Image
                            src={Glovo}
                            alt="Partners"
                            quality={100}
                            className="object-center w-14 h-full lg:w-28 lg:h-full grayscale pr-2"
                        />
                        <Image
                            src={Berkshire}
                            alt="Partners"
                            quality={100}
                            className="object-center w-14 h-full lg:w-28 lg:h-full grayscale pr-2"
                        />
                        <Image
                            src={Sujimoto}
                            alt="Partners"
                            quality={100}
                            className="object-center w-14 h-full lg:w-28 lg:h-full grayscale pr-2"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
