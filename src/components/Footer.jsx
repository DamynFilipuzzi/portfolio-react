import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <>
      <footer className="bg-footer w-full h-44 sm:h-52 grid grid-cols-3 gap-6 justify-items-center place-content-center">
        <div className="flex items-center p-2">
          <p className="p-2">
            Damyn Filipuzzi © {new Date().getFullYear()}. Vectors and icons by{" "}
            <a
              className="underline"
              href="https://www.svgrepo.com"
              target="_blank"
              rel="external"
            >
              SVG Repo
            </a>
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-col gap-8 sm:gap-4 sm:underline place-content-center p-2 text-center">
          <div>
            <a className="hover:underline" href="#about">
              About
            </a>
          </div>
          <div>
            <a className="hover:underline" href="#projects">
              Projects
            </a>
          </div>
          <div>
            <a className="hover:underline" href="#resume">
              Resume
            </a>
          </div>
          <div>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 sm:gap-2 items-center p-2">
          <div>
            <a
              target="_blank"
              rel="external"
              href="https://github.com/DamynFilipuzzi"
            >
              <img className="w-8" src={Github} alt="Github Logo" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="external"
              href="https://www.linkedin.com/in/damyn-filipuzzi/"
            >
              <img className="w-8" src={Linkedin} alt="Github Logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
