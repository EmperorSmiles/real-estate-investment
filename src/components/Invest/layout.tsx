import Image from "next/image";
import background from "../../../public/BGimage.png";

export default function layout() {
    return (
        <div className="relative bg-cover bg-center h-96">
            <Image
                src={background}
                alt="Hero"
                height={900}
                width={500}
                quality={100}
                priority
                className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
        </div>
    );
}
