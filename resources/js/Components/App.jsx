import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Engagement from "./Engagement";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (
        <div className="portfolio">
            <Nav />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Engagement />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
