import "../components/Projects.css";

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Projects() {
    return (
        <>
            <div className="projects" id="projects">
                <div className="content-opposite p-4">
                    <h1 className="text-center text-4xl font-bold">
                        Projects I've worked on
                    </h1>
                </div>
                <div className="p-4 bg-back-primary">
                    <div className="p-4 m-5 max-w-5xl mx-auto flex flex-row bg-slate-800 rounded-md overflow-hidden shadow-lg">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <h1 className="text-left text-2xl font-bold">
                                        Curriculum MAP
                                    </h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <h2 className="text-left text-2xl font-bold">
                                        Project Description
                                    </h2>
                                    <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                                        This online tool provides flexibility to
                                        meet the needs of faculty in any point
                                        of their development to generate ideas,
                                        create, and evaluate new or existing
                                        courses and programs, using backward
                                        design. With this tool, the goal is to
                                        get to a point where instructors feel
                                        they are supported with curriculum
                                        development without having to know the
                                        ins and outs of pedagogical needs, or of
                                        specific program requirements.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <h1 className="text-left text-2xl font-bold">
                                        Hot Desking
                                    </h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <h2 className="text-left text-2xl font-bold">
                                        Project Description
                                    </h2>
                                    <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                                        Project description for hot desking
                                        admin Panel
                                    </p>
                                    <h2 className="text-left text-2xl font-bold">
                                        Video Demonstration
                                    </h2>
                                    <iframe
                                        className="w-full aspect-video"
                                        src="https://www.youtube.com/embed/eOPJkVcQDIw?si=NcI5INAdbcH5eP7Z"
                                        title="YouTube video player"
                                    ></iframe>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <h1 className="text-left text-2xl font-bold">
                                        Project #3
                                    </h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you
                                    can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
