import Pdf from "./Pdf";

function Resume() {
  return (
    <>
      <section id="resume" className="p-4">
        <div className="p-8 max-w-sm mx-auto">
          <h1 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
            My Resume
          </h1>
        </div>
        <Pdf />
      </section>
    </>
  );
}

export default Resume;
