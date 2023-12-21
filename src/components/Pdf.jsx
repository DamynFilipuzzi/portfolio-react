import { useEffect, useState } from "react";
import ResumePDF from "../assets/resume.pdf";
import Loader from "../assets/loader.svg";
import { Button } from "./ui/button";

function Pdf() {
  const [pdf, setPDF] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [failResponse, setFailResponse] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const handleFailResponse = () => {
    if (!failResponse) {
      setFailResponse(!failResponse);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    fetch(ResumePDF).then((response) => {
      try {
        if (!response.ok) {
          handleFailResponse();
          throw new Error("PDF file not found");
        }
        const data = response.url;
        setPDF(data);
      } catch (error) {
        console.error("Error fetching PDF:", error.message);
      }
    });
  }, []);

  const isMobile = width <= 811;

  return (
    <div className="m-5 max-w-7xl mx-auto bg-slate-800 ring-slate-900/5 rounded-lg overflow-hidden border-slate-800">
      {failResponse && (
        <div className="p-3">
          <p className="pt-2 text-center text-md">
            There was a problem retrieving the resume, please try reloading the page.
          </p>
        </div>
      )}
      {!pdf && !isMobile && !failResponse && (
        <div className="p-3">
          <img className="m-auto animate-spin" src={Loader} />
          <p className="pt-2 text-center text-xl animate-pulse">
            Loading Resume
          </p>
        </div>
      )}
      {pdf && !isMobile && !failResponse && (
        <div className="w-full h-[60rem]">
          <embed
            className="w-full h-full"
            src={pdf}
            type="application/pdf"
          ></embed>
        </div>
      )}
      {isMobile && !pdf && !failResponse && (
        <div className="p-3">
          <img className="m-auto animate-spin" src={Loader} />
          <p className="pt-2 text-center text-xl animate-pulse">
            Loading Resume
          </p>
        </div>
      )}
      {isMobile && pdf && !failResponse && (
        <div className="p-3 m-auto text-center">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Download Resume</Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Pdf;
