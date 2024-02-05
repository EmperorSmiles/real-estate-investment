import { testimonials } from "@/app/utilis/constants";
import Image from "next/image";

export default async function layout() {
    return (
        <div>
            <div>
                <h1>Our testimony</h1>
                {testimonials.map((instance, idx) => (
                    <div key={idx}>
                        <h1>{instance.text}</h1>
                        <Image
                            alt="profile"
                            src={instance.picture}
                            width={500}
                            height={500}
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
