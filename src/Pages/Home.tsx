import Card from "../components/Card";
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <>
            <div className="text-[40pt] flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-text_side">
                <Typewriter
                    onInit={(tw) => {
                        tw.typeString("Find Literally Everything Here");
                        tw.pauseFor(900);
                        tw.deleteChars(25);
                        tw.typeString("The Textbooks You Need");
                        tw.pauseFor(700);
                        tw.deleteAll();
                        tw.typeString("Find All The Formulae");
                        tw.deleteChars(16);
                        tw.typeString("Resources");
                        tw.pauseFor(500);
                        tw.typeString(" & Our Syllabus");
                        tw.start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <div className="grid grid-cols-3 mx-auto w-[90vw] mt-6">
                <Card
                    header="Physics Formulae"
                    content="All Physics Formulae"
                    tags={[["hi", "lmao"], ["hello"]]}
                    redirect={[true, "/formulae"]}
                />
                <Card
                    header="Math Formulae"
                    content="All Math Formulae"
                    redirect={[true, "/formulae"]}
                    tags={[["hi"], ["hello"]]}
                />
                <Card
                    header="Chemistry Formulae"
                    content="All Chemistry Formulae"
                    redirect={[true, "/formulae"]}
                    tags={[["hi"], ["hello"]]}
                />
                <div className="mt-14">
                    <Card
                        header="Math Textbook"
                        content="Find all Math Chapters Here"
                        tags={[
                            ["Textbook", "Extras/Math Textbook.pdf", "true"],
                            [
                                "Answers",
                                "Extras/Math Textbook Answers.pdf",
                                "true",
                            ],
                            ["Contents", "Extras/Contents.pdf", "true"],
                            [
                                "Practice Questions",
                                "Extras/Examination Formatted Questions.pdf",
                                "true",
                            ],
                            ["Chapter 1", "Extras/Chapter 1.pdf", "true"],
                            ["Chapter 2", "Extras/Chapter 2.pdf", "true"],
                            ["Chapter 3", "Extras/Chapter 3.pdf", "true"],
                            ["Chapter 4", "Extras/Chapter 4.pdf", "true"],
                            ["Chapter 5", "Extras/Chapter 5.pdf", "true"],
                            ["Chapter 6", "Extras/Chapter 6.pdf", "true"],
                            ["Chapter 7", "Extras/Chapter 7.pdf", "true"],
                            ["Chapter 8", "Extras/Chapter 8.pdf", "true"],
                            ["Chapter 9", "Extras/Chapter 9.pdf", "true"],
                            ["Chapter 10", "Extras/Chapter 10.pdf", "true"],
                            ["Chapter 11", "Extras/Chapter 11.pdf", "true"],
                            ["Chapter 12", "Extras/Chapter 12.pdf", "true"],
                            ["Chapter 13", "Extras/Chapter 13.pdf", "true"],
                            ["Chapter 14", "Extras/Chapter 14.pdf", "true"],
                            ["Chapter 15", "Extras/Chapter 15.pdf", "true"],
                            ["Chapter 16", "Extras/Chapter 16.pdf", "true"],
                            ["Chapter 17", "Extras/Chapter 17.pdf", "true"],
                            ["Chapter 18", "Extras/Chapter 18.pdf", "true"],
                            ["Chapter 19", "Extras/Chapter 19.pdf", "true"],
                            ["Chapter 20", "Extras/Chapter 20.pdf", "true"],
                            ["Chapter 21", "Extras/Chapter 21.pdf", "true"],
                            ["Chapter 22", "Extras/Chapter 22.pdf", "true"],
                            ["Chapter 23", "Extras/Chapter 23.pdf", "true"],
                            ["Chapter 24", "Extras/Chapter 24.pdf", "true"],
                        ]}
                    />
                </div>
                <div className="grid grid-rows-3 mt-14">
                    <Card
                        header="ICT Resources"
                        content="ICT Resources Here"
                        tags={[["ICT Textbook", "/formulae"], ["Source Files"]]}
                    />
                    <Card
                        header="Biology Resources"
                        content="Textbook, Workbook and Answers"
                        tags={[
                            ["Online Textbook And Workbook"],
                            ["Textbook Answers"],
                            ["Workbook Answers"],
                        ]}
                    />
                    <Card header="" content="" tags={[[""]]} />
                </div>
            </div>
        </>
    );
}

export default Home;
