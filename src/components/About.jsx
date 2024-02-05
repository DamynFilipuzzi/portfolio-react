import Portrait3 from "../assets/portrait3.png";
import Computer from "../assets/computer.svg";
import Web from "../assets/web.svg";
import Sql from "../assets/sql.svg";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="p-8 max-w-sm mx-auto">
          <h1 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
            About Me
          </h1>
        </div>

        <div className="p-4">
          <div className="max-w-sm mt-5 mx-auto bg-slate-800 rounded-xl shadow-xl overflow-hidden custom:max-w-2xl sm:hover:scale-100 hover:scale-110 transition-all duration-500">
            <div className="custom:flex">
              <div className="custom:shrink-0">
                <img
                  className="h-72 w-full object-cover object-top custom:h-full custom:w-48 custom:inline-flex"
                  src={Portrait3}
                  alt="Portfolio Portrait 1"
                />
              </div>
              <div className="p-8">
                <div className="p-text uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                  Hello! &#128516;
                </div>
                <p className="mt-2 text-slate-300 text-md sm:text-sm">
                  I&apos;m Damyn, a passionate computer science graduate with
                  over a year of hands-on experience in the dynamic world of
                  full-stack web development. My journey in the tech realm has
                  led me to specialize in crafting seamless and efficient
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-x-10 sm:gap-x-0 justify-center">
            <div className="max-w-sm mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl sm:hover:scale-100 hover:scale-110 transition-all duration-500">
              <div className="text-center">
                <span className="p-text inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                  <img
                    className="h-16 w-16 sm:hover:scale-100 hover:scale-110 transition-all duration-500"
                    src={Computer}
                    alt="Computer-Image"
                  />
                </span>
              </div>
              <h3 className="p-text uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-5 text-center">
                Full-Stack Proficiency
              </h3>
              <p className="text-slate-300 mt-2 text-md sm:text-sm">
                With a solid foundation in both front-end and back-end
                technologies, I bring a holistic approach to web development.
                From designing intuitive user interfaces to optimizing database
                performance, I&apos;m committed to delivering end-to-end
                solutions.
              </p>
            </div>
            <div className="max-w-sm mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl sm:hover:scale-100 hover:scale-110 transition-all duration-500">
              <div className="text-center">
                <span className="p-text inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                  <img
                    className="h-16 w-16 sm:hover:scale-100 hover:scale-110 transition-all duration-500"
                    src={Web}
                    alt="Lightbulb-Image"
                  />
                </span>
              </div>
              <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-5 text-center">
                HTML & JavaScript
              </h3>
              <p className="text-slate-300 mt-2 text-md sm:text-sm">
                Proficient in crafting responsive and dynamic user interfaces
                using HTML and JavaScript, I focus on delivering engaging and
                user-friendly experiences.
              </p>
            </div>
            <div className="max-w-sm mt-10 bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl sm:hover:scale-100 hover:scale-110 transition-all duration-500">
              <div className="text-center">
                <span className="p-text inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                  <img
                    className="h-16 w-16 sm:hover:scale-100 hover:scale-110 transition-all duration-500"
                    src={Sql}
                    alt="Team-Image"
                  />
                </span>
              </div>
              <h3 className="p-text uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-5 text-center">
                Databases
              </h3>
              <p className="text-slate-300 mt-2 text-md sm:text-sm">
                My expertise extends across database management systems such as
                MySQL, where I excel in schema design, query optimization, and
                ensuring data integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
