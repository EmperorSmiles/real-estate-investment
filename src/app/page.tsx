import NavBar from "./components/NavBar/layout";
import Hero from "./components/Hero/layout";
import About from "./components/About/layout";
import Body from "./components/Body/layout";
import Property from "./components/LatestProperty/layout";
import Example from "./components/Example/layout";
import Steps from "./components/Steps/layout";

export default function Home() {
    return (
        <div className=" ">
            <NavBar />
            <Hero />
            <About />
            <Body />
            <Property />
            <Example />
            <Steps />
        </div>
    );
}
