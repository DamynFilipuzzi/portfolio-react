import Curriculum from "../assets/curriculum-img.png";
import { Badge } from "@/components/ui/badge";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <div className="p-8 max-w-sm mx-auto">
                    <h1 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
                        Projects I've worked on
                    </h1>
                </div>

                <div className="p-4 m-5 max-w-7xl mx-auto flex flex-row bg-slate-800 rounded-md overflow-hidden shadow-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h1 className="text-left text-2xl font-bold text-indigo-500">
                                    Curriculum MAP
                                </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="p-5 border-slate-600/25 border-2 rounded-md">
                                    <div className="grid grid-cols-6 gap-4">
                                        <div className="col-span-full text-end">
                                            <div className="space-x-2">
                                                <Badge variant="laravel">
                                                    Laravel
                                                </Badge>
                                                <Badge variant="php">PHP</Badge>
                                                <Badge variant="mysql">
                                                    MySQL
                                                </Badge>
                                                <Badge variant="js">JS</Badge>
                                                <Badge variant="jquery">
                                                    JQuery
                                                </Badge>
                                                <Badge variant="bootstrap">
                                                    Bootstrap
                                                </Badge>
                                                <Badge variant="html">
                                                    HTML
                                                </Badge>
                                                <Badge variant="css">CSS</Badge>
                                                <Badge variant="ajax">
                                                    AJAX
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="row-span-2 col-span-4 sm:col-span-full">
                                            <h2 className="text-left text-2xl font-bold">
                                                Project Description
                                            </h2>
                                            <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                                                Curriculum MAP was created to
                                                help course instructors and
                                                program coordinators at the
                                                University of British Columbia
                                                better understand how to suit
                                                the needs of students. This
                                                online tool provides flexibility
                                                to meet the needs of faculty in
                                                any point of their development
                                                to generate ideas, create, and
                                                evaluate new or existing courses
                                                and programs, using backward
                                                design. With this tool, the goal
                                                is to get to a point where
                                                instructors feel they are
                                                supported with curriculum
                                                development without having to
                                                know the ins and outs of
                                                pedagogical needs, or of
                                                specific program requirements.
                                                As well this tool allows program
                                                coordinators to assess the
                                                overall coverage of learning
                                                concepts students receive
                                                through intuitive tables and
                                                charts. These reporting metrics
                                                can be downloaded into various
                                                formats further reducing the
                                                burden for program coordinators.
                                            </p>
                                        </div>
                                        <div className="col-span-2 row-span-2 sm:row-start-6 sm:row-end-7 sm:col-span-full">
                                            <figure className="sm:mx-auto sm:basis-full min-w-[40%] min-h-[40%] max-h-md max-w-md bg-indigo-500 rounded-md border-2 border-slate-900 shadow-xl text-white hover:text-cyan-200 hover:bg-indigo-700 transition duration-300 hover:shadow-2xl hover:scale-105 sm:hover:scale-100">
                                                <a
                                                    href="https://curriculum.ok.ubc.ca/"
                                                    target="_blank"
                                                    rel="external"
                                                >
                                                    <img
                                                        src={Curriculum}
                                                        alt="Image of the Curriculum MAPS UBC dashboard"
                                                        className="grayscale-[25%] hover:grayscale-0"
                                                    />
                                                    <figcaption className="text-center text-lg">
                                                        Check out the live site
                                                    </figcaption>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="row-span-2 col-start-1 col-end-7 sm:row-start-4 sm:row-end-5">
                                            <h2 className="text-left text-2xl font-bold">
                                                My Role In The Project
                                            </h2>
                                            <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                                                My role in this team was one of
                                                two full stack web developers.
                                                For this project I was
                                                responsible for various tasks
                                                such as frontend and backend
                                                development, database
                                                management, data security and
                                                vulnerability management,
                                                loading optimization, and
                                                various other tasks. A large
                                                portion of my time was spent
                                                creating new database schemas
                                                and improving older designs
                                                built by previous developers.
                                            </p>
                                        </div>
                                        <div className="col-start-1 col-end-7 sm:mb-2">
                                            <h2 className="text-left text-2xl font-bold">
                                                Links
                                            </h2>
                                            <ul className="list-disc space-y-2 m-2.5 text-lg sm:text-sm">
                                                <li>
                                                    <p>
                                                        <a
                                                            href="https://github.com/bohuie/curriculum/tree/master"
                                                            target="_blank"
                                                            rel="external"
                                                            className="hover:text-cyan-200 text-cyan-500"
                                                        >
                                                            https://github.com/bohuie/curriculum/tree/master
                                                        </a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <a
                                                            href="https://curriculum.ok.ubc.ca/"
                                                            target="_blank"
                                                            rel="external"
                                                            className="hover:text-cyan-200 text-cyan-500"
                                                        >
                                                            https://curriculum.ok.ubc.ca/
                                                        </a>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <h1 className="text-left text-2xl font-bold text-indigo-500">
                                    Hot Desking
                                </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                <h2 className="text-left text-2xl font-bold">
                                    Project Description
                                </h2>
                                <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                                    Project description for hot desking admin
                                    Panel
                                </p>
                                <h2 className="text-left text-2xl font-bold">
                                    Video Demonstration
                                </h2>
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/eOPJkVcQDIw?si=NcI5INAdbcH5eP7Z"
                                    title="YouTube video player"
                                    allowFullScreen="allowfullscreen"
                                ></iframe>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <h1 className="text-left text-2xl font-bold text-indigo-500">
                                    Portfolio
                                </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                Filler text for now
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

export default Projects;
