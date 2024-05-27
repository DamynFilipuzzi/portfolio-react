import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import SD1 from "../assets/sd1.png";
import SD2 from "../assets/sd2.png";
import SD3 from "../assets/sd3.png";

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
  const p2slides = [SD1, SD2, SD3];
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
                        <Badge variant="js">Javascript</Badge>
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
                        Curriculum MAP was created to help align course
                        instructors with program coordinators at the University
                        of British Columbia. The web application has over 200
                        users with a 99.9% uptime.
                      </p>
                      <h2 className="text-left text-2xl font-bold">
                        My Role In The Project
                      </h2>
                      <ul className="text-slate-300 text-lg sm:text-sm m-2.5 text-left list-disc">
                        <li>
                          Responsibilities included full-stack development,
                          database administration, data security, vulnerability
                          management, fixing bugs, and optimization of loading
                          processes
                        </li>
                        <li>
                          The project is built on Laravel framework with PHP
                          backend, requiring Javascript, HTML, and CSS for the
                          front-end, and Bootstrap for UI components
                        </li>
                        <li>
                          Developed dynamic and filterable reporting metrics
                          such as graphs, and tables for clear and concise
                          information presentation. As well as optimizing the
                          loading of metrics using AJAX fetch requests to
                          improve page load times.
                        </li>
                        <li>
                          I was also responsible for fixing and improving site
                          vulnerability and security, such as Cross-site
                          scripting and SQL injection.
                        </li>
                      </ul>
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
                  Steam Deals
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-5 border-slate-600/25 border-x-2 rounded-md">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-full text-end">
                      <div className="space-x-2">
                        <Badge variant="nextjs">NextJS</Badge>
                        <Badge variant="react">React</Badge>
                        <Badge variant="js">Javascript</Badge>
                        <Badge variant="postgresql">PostgreSQL</Badge>
                        <Badge variant="python">Python</Badge>
                        <Badge variant="vercel">Vercel</Badge>
                        <Badge variant="html">HTML</Badge>
                        <Badge variant="css">CSS</Badge>
                        <Badge variant="tailwind">Tailwind</Badge>
                      </div>
                    </div>
                    <div className="row-span-2 col-span-6 sm:col-span-full">
                      <figure className="p-2 mx-auto sm:float-none float-right sm:basis-full min-w-[45%] min-h-[45%] sm:min-w-0 sm:min-h-0 max-h-md max-w-lg shadow-xl">
                        <Carousel slides={p2slides} />
                      </figure>
                      <h2 className="text-left text-2xl font-bold">
                        Project Description
                      </h2>
                      <ul className="text-slate-300 text-lg sm:text-sm m-2.5 text-left list-disc">
                        <li>
                          Steam Deals aims to help gamers when choosing the best
                          time to purchase a game. The site shows users a
                          historical record of all 72,000+ games that Steam
                          sells.
                        </li>
                        <li>
                          Containerized Python scripts run with Cron scheduling
                          to pull price changes, new game listings, reviews, and
                          game descriptions. Hosted on AWS EC2.
                        </li>
                        <li>
                          Hosted on the Vercel platform, written in Next.js for
                          the backend, and React.js for the front-end library.
                          Implemented with tRPC and Prisma for ORM.
                        </li>
                      </ul>
                    </div>
                    <div className="row-span-1 col-span-6 sm:col-span-full">
                      <h2 className="text-left text-2xl font-bold">Links</h2>
                      <ul className="list-inside list-disc space-y-2 m-2.5 text-lg sm:text-sm">
                        <li>
                          Repository:{" "}
                          <a
                            href="https://github.com/DamynFilipuzzi/steam-deals"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://github.com/DamynFilipuzzi/steam-deals
                          </a>
                          ,{" "}
                          <a
                            href="https://github.com/DamynFilipuzzi/scraper-py"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://github.com/DamynFilipuzzi/scraper-py
                          </a>
                        </li>
                        <li>
                          Live Site:{" "}
                          <a
                            href="https://www.steamdeals.ca/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-200 text-cyan-500"
                          >
                            https://www.steamdeals.ca/
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
                        <Badge variant="js">Javascript</Badge>
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
                        Hot Desking was developed as a combined capstone project
                        by two student groups to facilitate desk finding and
                        reservation for students, faculty, and staff at the
                        University of British Columbia.
                      </p>
                      <h2 className="text-left text-2xl font-bold">
                        My Role In The Project
                      </h2>
                      <ul className="text-slate-300 text-lg sm:text-sm m-2.5 text-left list-disc">
                        <li>
                          Took a leadership role on the admin side, while
                          overseeing the user side team. Built the base for both
                          teams to build on and containerized the project with
                          Docker.
                        </li>
                        <li>
                          Developed the CI/CD pipeline using GitHub Actions and
                          Drone CI for automated deployment and testing.
                        </li>
                        <li>
                          Ensured thorough code testing practices and reviews
                          before code integration, achieving a code coverage
                          rate of 76%. Additionally, implemented usability
                          testing to ensure a user-centered interaction design
                          approach.
                        </li>
                        <li>
                          Responsible for integrating admin and user sides,
                          enforcing standardized database schema and technical
                          stack for both teams to follow.
                        </li>
                      </ul>
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

            <AccordionItem value="item-4">
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
                        <Badge variant="js">Javascript</Badge>
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
                      <ul className="text-slate-300 text-lg sm:text-sm m-2.5 text-left list-disc">
                        <li>
                          Created a project to showcase work while adhering to
                          web standards and SEO practices
                        </li>
                        <li>
                          Used project to enhance proficiency in ReactJS and
                          gain expertise in AWS S3
                        </li>
                        <li>
                          Dynamic rendering managed client-side with JavaScript
                        </li>
                      </ul>
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
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default Projects;
