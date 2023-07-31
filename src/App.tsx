import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import FormulaeMath from "./Pages/FormulaeDisplayerMath";
import FormulaeChemistry from "./Pages/FormulaeDisplayerChemistry";
import Home from "./Pages/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Textbooks"></Route>
            <Route path="/formulae">
                <Route path="/formulae/math" element={<FormulaeMath />}></Route>
                <Route path="/formulae/physics"></Route>
                <Route
                    path="/formulae/chemistry"
                    element={<FormulaeChemistry />}
                ></Route>
            </Route>
        </Routes>
    );
}

export default App;
