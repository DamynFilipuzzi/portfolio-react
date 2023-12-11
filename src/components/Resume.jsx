import ResumePDF from "../assets/resume.pdf";

function Resume() {
    return (
        <>
            <section id="resume" className="p-4">
                <div className="p-8 max-w-sm mx-auto">
                    <h1 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
                        My Resume
                    </h1>
                </div>

                <div className="m-5 max-w-7xl h-[60rem] mx-auto bg-slate-800 ring-slate-900/5 rounded-lg overflow-hidden border-slate-800">
                    <embed
                        src={ResumePDF}
                        className="w-full h-[60rem]"
                        type="application/pdf"
                    ></embed>
                </div>
            </section>
        </>
    );
}

export default Resume;
