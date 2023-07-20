import NavBar from "../components/nav-bar";
import Hero from "./hero";
import AboutMe from "./about-me";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

const Web = () =>{
    return(
        <>
            <NavBar />
            <Hero />
            <AboutMe />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default Web