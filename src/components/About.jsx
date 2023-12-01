import "../components/About.css";
import Portrait from "../assets/portrait.png";
import Computer from "../assets/computer.svg";
import Idea from "../assets/idea.svg";
import Team from "../assets/team.svg";

function About() {
    return (
        <>
            <main className="about" id="about">
                <div className="content-opposite p-4">
                    <h1 className="text-center text-4xl font-bold">About Me</h1>
                </div>
                <div className="p-4 bg-back-primary">
                    <div className="mt-5 max-w-3xl mx-auto flex flex-row bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                        <div className="basis-3/4">
                            <p className="text-white text-lg sm:text-sm m-2.5 text-left font-medium">
                                Hello!
                            </p>
                            <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                                I'm Damyn, a passionate computer science
                                graduate with a year of hands-on experience in
                                the dynamic world of full-stack web development.
                                My journey in the tech realm has led me to
                                specialize in crafting seamless and efficient
                                solutions.
                            </p>
                        </div>
                        <div className="basis-1/4 md:shrink-0">
                            <img
                                className="h-56 w-full object-cover md:h-full md:w-48"
                                src={Portrait}
                                alt="Portfolio-Picture"
                            />
                        </div>
                    </div>

                    <div className="mb-5 flex flex-wrap justify-center">
                        <div className="max-w-sm mx-5 mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                                    <img
                                        className="h-16 w-16 hover:scale-110 transition-all duration-500"
                                        src={Computer}
                                        alt="Computer-Image"
                                    />
                                </span>
                            </div>
                            <h3 className="text-white mt-5 text-base font-medium tracking-tight text-center">
                                Full-Stack Proficiency
                            </h3>
                            <p className="text-slate-300 mt-2 text-md sm:text-sm">
                                With a solid foundation in both front-end and
                                back-end technologies, I bring a holistic
                                approach to web development. From designing
                                intuitive user interfaces to optimizing database
                                performance, I'm committed to delivering
                                end-to-end solutions.
                            </p>
                        </div>
                        <div className="max-w-sm mx-5 mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                                    <img
                                        className="h-16 w-16 hover:scale-110 transition-all duration-500"
                                        src={Idea}
                                        alt="Lightbulb-Image"
                                    />
                                </span>
                            </div>
                            <h3 className="text-white mt-5 text-base font-medium tracking-tight text-center">
                                Innovative Problem Solver
                            </h3>
                            <p className="text-slate-300 mt-2 text-md sm:text-sm">
                                I thrive on challenges and view each project as
                                an opportunity to create something impactful. My
                                problem-solving skills are honed through
                                real-world experiences, allowing me to navigate
                                complexities with creativity and precision.
                            </p>
                        </div>
                        <div className="max-w-sm mx-5 mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                                    <img
                                        className="h-16 w-16 hover:scale-110 transition-all duration-500"
                                        src={Team}
                                        alt="Team-Image"
                                    />
                                </span>
                            </div>
                            <h3 className="text-white mt-5 text-base font-medium tracking-tight text-center">
                                Collaborative Team Player
                            </h3>
                            <p className="text-slate-300 mt-2 text-md sm:text-sm">
                                Having worked in diverse teams, I understand the
                                power of collaboration. I value open
                                communication and believe that collective
                                efforts lead to the most successful outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;