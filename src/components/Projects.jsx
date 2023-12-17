import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";

import { Badge } from "@/components/ui/badge";
import Carousel from "./ui/Carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Projects() {
  const p1slides = [C1, C2, C3];
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
                <div className="p-5 border-slate-600/25 border-x-2 rounded-md">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-full text-end">
                      <div className="space-x-2">
                        <Badge variant="laravel">Laravel</Badge>
                        <Badge variant="php">PHP</Badge>
                        <Badge variant="mysql">MySQL</Badge>
                        <Badge variant="js">JS</Badge>
                        <Badge variant="jquery">JQuery</Badge>
                        <Badge variant="bootstrap">Bootstrap</Badge>
                        <Badge variant="html">HTML</Badge>
                        <Badge variant="css">CSS</Badge>
                        <Badge variant="ajax">AJAX</Badge>
                      </div>
                    </div>
                    <div className="row-span-2 col-span-6 sm:col-span-full">
                      <figure className="p-2 mx-auto sm:float-none float-right sm:basis-full min-w-[45%] min-h-[45%] sm:min-w-0 sm:min-h-0 max-h-md max-w-lg shadow-xl">
                        <Carousel slides={p1slides} />
                      </figure>
                      <h2 className="text-left text-2xl font-bold">
                        Project Description
                      </h2>
                      <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                        Curriculum MAP was created to help course instructors
                        and program coordinators at the University of British
                        Columbia better understand how to suit the needs of
                        students. This online tool provides flexibility to meet
                        the needs of faculty in any point of their development
                        to generate ideas, create, and evaluate new or existing
                        courses and programs, using backward design. With this
                        tool, the goal is to get to a point where instructors
                        feel they are supported with curriculum development
                        without having to know the ins and outs of pedagogical
                        needs, or of specific program requirements.
                      </p>
                      <h2 className="text-left text-2xl font-bold">
                        My Role In The Project
                      </h2>
                      <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                        My role in this team was one of two full stack web
                        developers. For this project I was responsible for
                        various tasks such as frontend and backend development,
                        database management, data security and vulnerability
                        management, loading optimization, and various other
                        tasks. A large portion of my time was spent creating new
                        database schemas and improving older designs built by
                        previous developers.
                      </p>
                    </div>
                    <div className="row-span-1 col-span-6 sm:col-span-full">
                      <h2 className="text-left text-2xl font-bold">Links</h2>
                      <ul className="list-inside list-disc space-y-2 m-2.5 text-lg sm:text-sm">
                        <li>
                          Live Site:{" "}
                          <a
                            href="https://curriculum.ok.ubc.ca/"
                            target="_blank"
                            rel="external"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://curriculum.ok.ubc.ca/
                          </a>
                        </li>
                        <li>
                          Repository:{" "}
                          <a
                            href="https://github.com/bohuie/curriculum/tree/master"
                            target="_blank"
                            rel="external"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://github.com/bohuie/curriculum/tree/master
                          </a>
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
                  Project description for hot desking admin Panel
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
              <AccordionContent>Filler text for now</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h1 className="text-left text-2xl font-bold text-indigo-500">
                  Discussion Forum
                </h1>
              </AccordionTrigger>
              <AccordionContent>Filler text for now</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default Projects;
