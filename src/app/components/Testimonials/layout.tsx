import { testimonials } from "@/app/utilis/constants";
import Image from "next/image";

export default async function layout() {
    return (
        <div>
            <div>
                <h1 className="capitalize font-open_sans font-extrabold text-3xl">
                    Our testimony
                </h1>
                {testimonials.map((instance, idx) => (
                    <div key={idx}>
                        <h1>{instance.text}</h1>
                        <Image
                            alt="profile"
                            src={instance.picture}
                            width={500}
                            height={500}
                            className="rounded-full w-10 h-10"
                        />
                        <div>{instance.name}</div>
                        <div>{instance.location}</div>
                        <div>{instance.rating}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
