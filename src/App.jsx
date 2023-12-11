import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import AnimatedBackground from "./components/AnimatedBackground";
import Resume from "./components/Resume.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
    return (
        <>
            <main>
                <AnimatedBackground />
                <About />
                <Projects />
                <Resume />
                <Contact />
            </main>
        </>
    );
}

export default App;
