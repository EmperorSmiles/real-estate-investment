import { testimonials } from "@/app/utilis/constants";

export default async function layout() {
    return (
        <div>
            <div>
                <h1>Our testimony</h1>
                {testimonials.map((instance, idx) => (
                    <div key={idx}></div>
                ))}
            </div>
        </div>
    );
}
