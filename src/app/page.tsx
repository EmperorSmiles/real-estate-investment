import NavBar from "./components/NavBar/layout";
import Hero from "./components/Hero/layout";
import About from "./components/About/layout";
import Body from "./components/Body/layout";
import Property from "./components/LatestProperty/layout";
import Example from "./components/Example/layout";
import Steps from "./components/Steps/layout";
import Testimonials from "./components/Testimonials/layout";
import FAQSection from "./components/FAQ/layout";
import { faqs, testimonials } from "./utilis/constants";
import { ContextProvider } from "@/app/context/Context";

interface PageProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: PageProps) {
    return (
        <div className=" ">
            <ContextProvider>
                <NavBar />
                <Hero />
                <About />
                <Body />
                <Property />
                {/* <Example /> */}
                <Steps />
                <Testimonials />
                <FAQSection faqs={faqs} />
            </ContextProvider>
        </div>
    );
}
