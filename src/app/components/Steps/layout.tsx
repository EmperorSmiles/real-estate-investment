import ArrowButton from "@/app/components/ArrowButtons/layout";

export default function Steps() {
    const steps = [
        {
            title: "Step 01",
            desc: "Buy IntelliVest in your currency",
            note: "We divide properties into unique assets called IntelliVest, Each IntelliVest represents a fraction of the current value of the property.",
            note2: "IntelliVest are purchased in your currency so there's no need for expensive exchanges.",
        },
        {
            title: "Step 02",
            desc: "Earn Rental Income",
            note: "Your IntelliVest generates the quoted rental yield per month in proportion to how many IntelliVest of the property you own ",
            note2: "Watch your income grow in real-time and withdraw earned funds at any time",
        },
        {
            title: "Step 03",
            desc: "Grow Capital Gains",
            note: "The value of your IntelliVest are adjusted in line with annual valuations",
            note2: "This means your assets's potential growth is directly in line with the property's market value.",
        },
        {
            title: "Step 04",
            desc: "Sell Your IntelliVest",
            note: "Cash out at any moment by selling your IntelliVest at the click of a button",
            note2: "Capture capital gains with confidence on the only liquidity focused Property Platform",
        },
        {
            title: "Step 05",
            desc: "Diversify Your Portfolio",
            note: "Explore new investment opportunities and further diversify your portfolio.",
            note2: "Discover a range of properties and start building a well-balanced investment portfolio.",
        },
    ];

    return (
        <div className="w-full h-full px-4 py-6 bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-700 font-montserrat mb-4">
                5 Steps to the First Investment
            </h1>
            <div className="flex justify-between p-2">
                <p className="w-[70vw] text-gray-500 text-sm ">
                    Embarking on your investment journey can be a thrilling and
                    rewarding experience. Let&apos;s walk you through the
                    fundamentals steps to kickstart your investment portfolio
                    with confidence
                </p>
                <ArrowButton />
            </div>
            <div className="flex overflow-clip">
                {steps.map((text, idx) => (
                    <div key={idx} className=" p-2 text-sm">
                        <div className="flex-col w-72 h-72 p-4 bg-gray-200 shadow-md">
                            <h1 className="font-bold text-lg font-montserrat pb-3">
                                {text.title}
                            </h1>
                            <h1 className="font-bold text-lg font-montserrat capitalize pb-2">
                                {text.desc}
                            </h1>
                            <p className="text-gray-500 pb-4">{text.note}</p>
                            <p className="text-gray-500">{text.note2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
