import React from "react";
import "./App.css";
import Cell from "./components/FormulaCell";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Cell formula="XD" description="DX"/>
            <Routes>
                <Route path="/"></Route>
                {/* <Route path="/Textbooks"></Route>
                <Route path="/formulas">
                    <Route path=":id"></Route>
                </Route> */}
            </Routes>
        </>
    );
}

export default App;
