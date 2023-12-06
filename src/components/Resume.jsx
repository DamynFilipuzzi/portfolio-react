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
                    <object
                        data={ResumePDF}
                        type="application/pdf"
                        className="w-full h-[60rem]"
                    >
                        <p>
                            Unable to display PDF file.
                            <a href="resume.pdf"> Download</a> instead.
                        </p>
                    </object>
                </div>
            </section>
        </>
    );
}

export default Resume;
