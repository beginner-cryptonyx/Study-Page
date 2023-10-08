import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import FormulaeMath from "./Pages/Math";
import FormulaeChemistry from "./Pages/Chemistry";
import Home from "./Pages/Home";
import Formulae from "./Pages/Displayer";
import FormulaePhysics from "./Pages/Physics";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Textbooks"></Route>
            <Route path="/formulae">
                <Route path="/formulae/math" element={<FormulaeMath />}></Route>
                <Route path="/formulae/physics" element={<FormulaePhysics />}></Route>
                <Route
                    path="/formulae/chemistry"
                    element={<FormulaeChemistry />}
                ></Route>
            </Route>
        </Routes>
    );
}

export default App;
