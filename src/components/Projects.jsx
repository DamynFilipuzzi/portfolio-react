import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import D1 from "../assets/ddr1.png";
import D2 from "../assets/ddr2.png";
import D3 from "../assets/ddr3.png";
import D4 from "../assets/ddr4.png";

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
  const p2slides = [D1, D2, D3, D4];
  return (
    <>
      <section className="projects" id="projects">
        <div className="p-8 max-w-sm mx-auto">
          <h1 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
            Projects I&apos;ve worked on
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
                        database schemas and improving upon designs built by
                        previous developers. In addition I also built various
                        reporting metrics such as graphs and tables to represent
                        large amounts of information in a clean and concise way.
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
                            rel="noreferrer"
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
                            rel="noreferrer"
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
                <div className="p-5 border-slate-600/25 border-x-2 rounded-md">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-full text-end">
                      <div className="space-x-2">
                        <Badge variant="laravel">Laravel</Badge>
                        <Badge variant="php">PHP</Badge>
                        <Badge variant="docker">Docker</Badge>
                        <Badge variant="postgresql">PostgreSQL</Badge>
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
                        <iframe
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/eOPJkVcQDIw?si=NcI5INAdbcH5eP7Z"
                          title="YouTube video player"
                          allowFullScreen="allowfullscreen"
                        ></iframe>
                      </figure>
                      <h2 className="text-left text-2xl font-bold">
                        Project Description
                      </h2>
                      <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                        Hot Desking was created to help students, faculty, and
                        staff at the University of British Columbia find and
                        reserve available desks around campus. This project was
                        created by two separate groups of students as part of a
                        capstone project.
                      </p>
                      <h2 className="text-left text-2xl font-bold">
                        My Role In The Project
                      </h2>
                      <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                        This project was split into two groups, admin side and
                        user Side. I was part of the admin side, however my role
                        for this project was to act as the team lead for the 2
                        teams as I had the most experience as a Web Developer.
                        Over the course of this project it was my responsibility
                        to ensure that both sides of the project could be
                        integrated together seamlessly, this involved making
                        sure that each team followed an agreed upon database
                        schema and technical stack which I was required to
                        produce. As well one of the requirements was to produce
                        a containerized project which I choose to use docker. As
                        well it was also my job to ensure that our team properly
                        tested their code.
                      </p>
                    </div>
                    <div className="row-span-1 col-span-6 sm:col-span-full">
                      <h2 className="text-left text-2xl font-bold">Links</h2>
                      <ul className="list-inside list-disc space-y-2 m-2.5 text-lg sm:text-sm">
                        <li>
                          Repository:{" "}
                          <a
                            href="https://github.com/UBCO-COSC-499-Summer-2022/hot-desking-deploy"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://github.com/UBCO-COSC-499-Summer-2022/hot-desking-deploy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h1 className="text-left text-2xl font-bold text-indigo-500">
                  Portfolio
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-5 border-slate-600/25 border-x-2 rounded-md">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-full text-end">
                      <div className="space-x-2">
                        <Badge variant="react">React</Badge>
                        <Badge variant="aws">AWS S3</Badge>
                        <Badge variant="js">JS</Badge>
                        <Badge variant="tailwind">Tailwind</Badge>
                        <Badge variant="html">HTML</Badge>
                        <Badge variant="css">CSS</Badge>
                        <Badge variant="ajax">AJAX</Badge>
                      </div>
                    </div>
                    <div className="row-span-2 col-span-6 sm:col-span-full">
                      <h2 className="text-left text-2xl font-bold">
                        Project Description
                      </h2>
                      <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                        Showcase some of the recent projects I&apos;ve worked
                        on. As well when taking on this project I originally
                        planned on using HTML, Javascript, CSS and hosting it on
                        github pages. However, after creating a mockup I decided
                        I wanted to use this as a time to better my skills with
                        a more modern front end with React. As well I also
                        decided this would be a good time to better familiarize
                        myself with AWS rather than using github pages.
                      </p>
                    </div>
                    <div className="row-span-1 col-span-6 sm:col-span-full">
                      <h2 className="text-left text-2xl font-bold">Links</h2>
                      <ul className="list-inside list-disc space-y-2 m-2.5 text-lg sm:text-sm">
                        <li>
                          Repository:{" "}
                          <a
                            href="https://github.com/DamynFilipuzzi/portfolio-react"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://github.com/DamynFilipuzzi/portfolio-react
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h1 className="text-left text-2xl font-bold text-indigo-500">
                  DDR Discussion Forum
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-5 border-slate-600/25 border-x-2 rounded-md">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-full text-end">
                      <div className="space-x-2">
                        <Badge variant="react">React</Badge>
                        <Badge variant="js">JS</Badge>
                        <Badge variant="mysql">MySQL</Badge>
                        <Badge variant="firebase">Firebase</Badge>
                        <Badge variant="nodejs">NodeJS</Badge>
                        <Badge variant="html">HTML</Badge>
                        <Badge variant="css">CSS</Badge>
                      </div>
                    </div>
                    <div className="row-span-2 col-span-6 sm:col-span-full">
                      <figure className="p-2 mx-auto sm:float-none float-right sm:basis-full min-w-[45%] min-h-[45%] sm:min-w-0 sm:min-h-0 max-h-md max-w-lg shadow-xl">
                        <Carousel slides={p2slides} />
                      </figure>
                      <h2 className="text-left text-2xl font-bold">
                        Project Description
                      </h2>
                      <p className="text-slate-300 text-lg sm:text-sm m-2.5 text-left">
                        This was the final project for the Web Programming
                        course (COSC 360). The primary objective was to design a
                        platform enabling unregistered users to access posts,
                        while registered users could actively engage by creating
                        and commenting on posts. Drawing inspiration from
                        renowned web forums such as Reddit, the project
                        incorporated a comparable design and functionalities.
                        Employing node.js for the backend and React as the
                        front-end library.
                      </p>
                    </div>
                    <div className="row-span-1 col-span-6 sm:col-span-full">
                      <h2 className="text-left text-2xl font-bold">Links</h2>
                      <ul className="list-inside list-disc space-y-2 m-2.5 text-lg sm:text-sm">
                        <li>
                          Repository:{" "}
                          <a
                            href="https://github.com/daultonb/COSC360Project"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://github.com/daultonb/COSC360Project
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default Projects;
