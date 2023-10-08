import Card from "../components/Card";
import Typewriter from "typewriter-effect";
const bg = require("../images/bg1.jpg");

function Home() {
    return (
        <main className="" style={{ backgroundImage: `url(${bg})` }}>
            <div id="cursor"></div>
            <div className="backdrop-saturate-[0.6] backdrop-blur-lg text-[40pt] flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3371f7] to-[#00b7ff] animate-text_side text-center pb-16 pt-2">
                <h1 className="pr-2 text-transparent bg-clip-text bg-gradient-to-b from-[#f5b937] to-[#ff8800] animate-text_down">
                    Find
                </h1>
                <Typewriter
                    onInit={(tw) => {
                        tw.typeString("Everything IGCSE");
                        tw.pauseFor(900);
                        tw.deleteChars(16);
                        tw.typeString("Textbooks");
                        tw.pauseFor(500);
                        tw.pauseFor(700);
                        tw.deleteChars(9);
                        tw.typeString("Formulae");
                        tw.pauseFor(500);
                        tw.deleteChars(8);
                        tw.typeString("Resources");
                        tw.pauseFor(500);
                        tw.deleteChars(9);
                        tw.typeString("Our Syllabus");
                        tw.start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <article className="backdrop-blur-lg backdrop-saturate-[0.6]">
                <div className="grid mx-auto w-[90vw] ">
                    <div className="grid grid-cols-1 md:grid-cols-4 mx-auto w-[90vw]">
                        <Card
                            header="Physics Formulae"
                            // content="All Physics Formulae"
                            tags={[
                                ["Laws", ""],
                                ["General Physics"],
                                ["Energetics"],
                                ["Thermal Physics"],
                                ["Light and Waves"],
                                ["Electricity"],
                                ["Magnetism"],
                                ["Nuclear Physics"],
                            ]}
                            redirect={[true, "/formulae/physics"]}
                        />
                        <Card
                            header="Biology Formulae"
                            // content="All Physics Formulae"
                            tags={[
                                [
                                    "Online Textbook & Workbook",
                                    "https://www.cambridge.org/go/resources",
                                    "redirect",
                                ],
                                ["Concept Map"]
                            ]}
                            redirect={[true, "/formulae/biology"]}
                        />
                        <Card
                            header="Math Formulae"
                            // content="All Math Formulae"
                            redirect={[true, "/formulae/math"]}
                            tags={[
                                ["Algebra", ""],
                                ["Geometry"],
                                ["Polynomials"],
                                ["Statistics"],
                                ["Graphs"],
                                ["Probability"],
                            ]}
                        />
                        <Card
                            header="Chemistry Formulae"
                            // content="All Chemistry Formulae"
                            redirect={[true, "/formulae/chemistry"]}
                            tags={[
                                ["Reactivity Series"],
                                ["General Formulae"],
                                ["Solubility"],
                                ["Acids and Basses"],
                                ["Ion testing"],
                                ["Equilibrium and Rate of Reaction"],
                            ]}
                        />
                    </div>
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
                        <Card
                            header="Math Textbook"
                            // content="Find all Math Chapters Here"
                            tags={[
                                [
                                    "Textbook",
                                    "Extras/Math Textbook.pdf",
                                    "download",
                                ],
                                [
                                    "Answers",
                                    "Extras/Math Textbook Answers.pdf",
                                    "download",
                                ],
                                ["Contents", "Extras/Contents.pdf", "download"],
                                [
                                    "Practice Questions",
                                    "Extras/Examination Formatted Questions.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 1",
                                    "Extras/Chapter 1.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 2",
                                    "Extras/Chapter 2.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 3",
                                    "Extras/Chapter 3.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 4",
                                    "Extras/Chapter 4.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 5",
                                    "Extras/Chapter 5.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 6",
                                    "Extras/Chapter 6.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 7",
                                    "Extras/Chapter 7.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 8",
                                    "Extras/Chapter 8.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 9",
                                    "Extras/Chapter 9.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 10",
                                    "Extras/Chapter 10.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 11",
                                    "Extras/Chapter 11.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 12",
                                    "Extras/Chapter 12.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 13",
                                    "Extras/Chapter 13.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 14",
                                    "Extras/Chapter 14.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 15",
                                    "Extras/Chapter 15.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 16",
                                    "Extras/Chapter 16.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 17",
                                    "Extras/Chapter 17.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 18",
                                    "Extras/Chapter 18.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 19",
                                    "Extras/Chapter 19.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 20",
                                    "Extras/Chapter 20.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 21",
                                    "Extras/Chapter 21.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 22",
                                    "Extras/Chapter 22.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 23",
                                    "Extras/Chapter 23.pdf",
                                    "download",
                                ],
                                [
                                    "Chapter 24",
                                    "Extras/Chapter 24.pdf",
                                    "download",
                                ],
                            ]}
                        />

                        <div className="grid grid-rows-3">
                            <Card
                                header="ICT Resources"
                                // content="ICT Resources Here"
                                tags={[
                                    ["ICT Textbook", "/formulae"],
                                    ["Source Files"],
                                ]}
                            />

                            <Card
                                header="EVM resources"
                                // content="Textbook, Workbook and answers"
                                tags={[
                                    [
                                        "Textbook",
                                        "/Extras/EVM Textbook.pdf",
                                        "download",
                                    ],
                                    [
                                        "Workbook",
                                        "/Extras/EVM Workbook.pdf",
                                        "download",
                                    ],
                                    [
                                        "Textbook Answers",
                                        "/Extras/environmental management glossary.pdf",
                                        "download",
                                    ],
                                    [
                                        "Workbook Answers",
                                        "/Extras/EVM Workbook Answers.pdf",
                                        "download",
                                    ],
                                    [
                                        "Glossary",
                                        "/Extras/environmental management glossary.pdf",
                                        "download",
                                    ],
                                ]}
                            />
                        </div>
                        <div className="grid grid-rows-2">
                            <Card
                                header="Useful Resources"
                                // content="Find multiple useful stuff here"
                                tags={[
                                    ["Class Timetable"],
                                    ["Grade 10 Exam Portion"],
                                    ["Grade 10 Exam Timetable"],
                                    [
                                        <a href="https://papers.gceguide.com/Cambridge%20IGCSE/">
                                            GCE Guide
                                        </a>,
                                    ],
                                    [
                                        <a href="https://www.savemyexams.com/igcse/#cie">
                                            Save My Exams
                                        </a>,
                                    ],
                                    [
                                        <a href="https://xtremepape.rs/threads/save-my-exams-notes-markschemes-free.108774/">
                                            SaveMyExams Cracked
                                        </a>,
                                    ],
                                    [
                                        <a href="https://znotes.org/caie/igcse/">
                                            ZNotes
                                        </a>,
                                    ],
                                    [
                                        <a href="https://papacambridge.com/caie">
                                            Papa Cambridge
                                        </a>,
                                    ],
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Home;
