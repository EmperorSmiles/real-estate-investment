import { items } from "@/app/utilis/constants";

export default function Description() {
    return (
        <div>
            {items.map((location, idx) => (
                <div key={idx} className="bg-slate-800 h-40">
                    <h1 className="relative">{location.city}</h1>
                </div>
            ))}
        </div>
    );
}
