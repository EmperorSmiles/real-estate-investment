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
        <div>
            <h1>5 Steps to the First Investment</h1>
            <p>
                Embarking on your investment journey can be a thrilling and
                rewarding experience. Let&apos;s walk you through the
                fundamentals steps to kickstart your investment portfolio with
                confidence
            </p>
            {steps.map((text, idx) => (
                <div key={idx}>
                    <h1>{text.title}</h1>
                    <h1>{text.desc}</h1>
                    <h1>{text.note}</h1>
                    <h1>{text.note2}</h1>
                </div>
            ))}
        </div>
    );
}
