import { useEffect, useState } from "react";
import ResumePDF from "../assets/resume.pdf";

function Pdf() {
  const [pdf, setPDF] = useState(null);

  useEffect(() => {
    fetch(ResumePDF).then((response) => {
      try {
        if (!response.ok) {
          throw new Error("PDF file not found");
        }
        const data = response.url;
        setPDF(data);
      } catch (error) {
        console.error("Error fetching PDF:", error.message);
      }
    });
  }, []);

  return (
    <div>
      {pdf && (
        <embed
          src={pdf}
          className="w-full h-[60rem]"
          type="application/pdf"
        ></embed>
      )}
    </div>
  );
}

export default Pdf;
