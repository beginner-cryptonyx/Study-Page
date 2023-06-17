import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Formulae from "./Pages/FormulaeDisplayer";
import Home from "./Pages/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Textbooks"></Route>
            <Route path="/formulae" element={<Formulae />}>
                <Route path=":id"></Route>
            </Route>
        </Routes>
    );
}

export default App;
