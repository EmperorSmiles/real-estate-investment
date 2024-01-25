import NavBar from "./components/NavBar/layout";
import Hero from "./components/Hero/layout";
import About from "./components/About/layout";
import Body from "./components/Body/layout";
import Property from "./components/LatestProperty/layout";

export default function Home() {
    return (
        <div className=" ">
            <NavBar />
            <Hero />
            <About />
            <Body />
            <Property />
        </div>
    );
}
