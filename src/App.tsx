import React from "react";
import "./App.css";
import Cell from "./components/FormulaCell";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";

function App() {
    
    return (
        <>
            <Card header="Test" content="Lmao" tags={["hi", "hello"]}/>
            {/* <Cell formula="XD" description="DX"/> */}
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
