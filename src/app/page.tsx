import NavBar from "@/components/NavBar/layout";
import Hero from "@/components/Hero/layout";
import About from "@/components/About/layout";
import Body from "@/components/Body/layout";
import Property from "@/components/LatestProperty/layout";
import Steps from "@/components/Steps/layout";
import Testimonials from "@/components/Testimonials/layout";
import FAQSection from "@/components/FAQ/layout";
import Invest from "@/components/Invest/layout";
import { faqs } from "./utilis/constants";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <NavBar />
            <Hero />
            <About />
            <Body />
            <Property />
            <Steps />
            <Testimonials />
            <FAQSection faqs={faqs} />
            <Invest />
        </div>
    );
}
