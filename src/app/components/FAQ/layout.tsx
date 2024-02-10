import { faqs } from "@/app/utilis/constants";

export default function layout() {
    return (
        <div className="bg-gray-100 h-full p-8 grid grid-cols-3">
            <div>Top Questions Answered</div>
            <div className="col-span-2">
                {faqs.map((content, idx) => (
                    <div key={idx}>
                        <div>
                            <div className="font-bold">{content.topic}</div>
                            <div className="py-8">
                                <p>{content.answer}</p>
                                <p>{content.p2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
