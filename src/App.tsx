import React from "react";
import "./App.css";
import Cell from "./components/FormulaCell";
import Typewriter from "typewriter-effect";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";

function App() {
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
                    content="Lmao"
                    tags={["hi", "hello"]}
                />
                <Card
                    header="Math Formulae"
                    content="Lmao"
                    tags={["hi", "hello"]}
                />
                <Card
                    header="Chemistry Formulae"
                    content="Lmao"
                    tags={["hi", "hello"]}
                />
            </div>
            <Routes>
                <Route path="/"></Route>
                <Route path="/Textbooks"></Route>
                <Route path="/formulas">
                    <Route path=":id"></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;