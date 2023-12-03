import "../components/About.css";
import Portrait1 from "../assets/portrait1.png";
import Portrait2 from "../assets/portrait2.png";
import Computer from "../assets/computer.svg";
import Idea from "../assets/idea.svg";
import Team from "../assets/team.svg";

function About() {
    return (
        <>
            <main className="about" id="about">
                <div className="p-8 max-w-sm mx-auto">
                    <h1 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
                        About Me
                    </h1>
                </div>

                <div className="p-4">
                    <div className="max-w-sm mt-5 mx-auto bg-slate-800 rounded-xl shadow-xl overflow-hidden custom:max-w-2xl hover:scale-110 transition-all duration-500">
                        <div className="custom:flex">
                            <div className="custom:shrink-0">
                                <img
                                    className="h-72 w-full object-cover custom:h-full custom:w-48 custom:hidden visible custom:invisible"
                                    src={Portrait2}
                                    alt="Portfolio Portrait 2"
                                />
                                <img
                                    className="h-64 w-full object-cover custom:h-full custom:w-48 hidden custom:visible invisible custom:inline-flex"
                                    src={Portrait1}
                                    alt="Portfolio Portrait 1"
                                />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    Hello! &#128515;
                                </div>
                                <p className="mt-2 text-slate-300 text-md sm:text-sm">
                                    I'm Damyn, a passionate computer science
                                    graduate with a year of hands-on experience
                                    in the dynamic world of full-stack web
                                    development. My journey in the tech realm
                                    has led me to specialize in crafting
                                    seamless and efficient solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 flex flex-wrap space-x-10 sm:space-x-0 justify-center">
                        <div className="max-w-sm mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl hover:scale-110 transition-all duration-500">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                                    <img
                                        className="h-16 w-16 hover:scale-110 transition-all duration-500"
                                        src={Computer}
                                        alt="Computer-Image"
                                    />
                                </span>
                            </div>
                            <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-5 text-center">
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
                        <div className="max-w-sm mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl hover:scale-110 transition-all duration-500">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                                    <img
                                        className="h-16 w-16 hover:scale-110 transition-all duration-500"
                                        src={Idea}
                                        alt="Lightbulb-Image"
                                    />
                                </span>
                            </div>
                            <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-5 text-center">
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
                        <div className="max-w-sm mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl hover:scale-110 transition-all duration-500">
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                                    <img
                                        className="h-16 w-16 hover:scale-110 transition-all duration-500"
                                        src={Team}
                                        alt="Team-Image"
                                    />
                                </span>
                            </div>
                            <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-5 text-center">
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
