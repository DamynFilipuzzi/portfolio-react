import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import AnimatedBackground from "./components/AnimatedBackground";
import Resume from "./components/Resume.jsx";

function App() {
    return (
        <>
            <AnimatedBackground />
            <main>
                <About />
                <Projects />
                <Resume />
            </main>
        </>
    );
}

export default App;
