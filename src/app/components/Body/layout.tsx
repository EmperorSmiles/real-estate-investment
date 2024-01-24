import Image from "next/image";
import Realtor from "../../../../public/Realtor+Client.jpg";

export default function Body() {
    return (
        <div className="w-full h-64 flex p-8">
            <div className="w-2/3 ">
                <h2 className="text-2xl font-bold w-96">
                    Affordable Property Investment in Singapore
                </h2>
                <p className="font-open_sans italic font-extralight">
                    With US property prices and mortgage rates at all time in
                    nearly 23 years *, the dream of owning a home continues to
                    be a dream for many. That&apos;s why we created IntelliVest.
                    We enable you to invest in the property market with as
                    little as $250 in as fast as a few minutes from signup to
                    purchase
                </p>
                <small className="font-open_sans italic font-extralight">
                    *US Census Bureau, January, 2024
                </small>
            </div>
            <div>
                <Image src={Realtor} alt="Hero" width={200} height={500} />
            </div>
        </div>
    );
}
