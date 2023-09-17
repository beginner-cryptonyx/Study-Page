import "../App.css";
import { MathJax } from "better-react-mathjax";
import { useState } from "react";

export interface MathCellProps {
    formula: string;
    description?: string;
    importance?: string;
    jax?: boolean;
}

export interface MultiCellProps {
    formula: string;
    description?: string;
    importance?: string;
    third_content?: any;
    columns?: number;
    jax?: boolean;
}
export interface CellSeparatorProps {
    title: string;
}

function MultiCell({
    formula,
    description,
    importance,
    jax,
    third_content,
    columns,
}: MultiCellProps) {
    return formula === "separator" ? (
        <div
            className={`bg-slate-500 mx-auto text-center flex justify-center font-bold mb-[0.0625rem] p-3 border-black border-2 border-b-0 mt-8 text-xl md:text-2xl separator`}
        >
            {description}
        </div>
    ) : columns === 3 ? (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`state0 formulae-3 target w-[100%] md:w-1/3 bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>

            <div
                className={`state1 hidden md:target md:w-1/3 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap  duration-500  justify-center align-bottom`}
            >
                <div className="desc text-center h-[100%] w-[100%]  p-2">
                    {description}
                </div>
            </div>

            <div
                className={`state2 hidden md:target md:w-1/3 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap duration-500 justify-center align-bottom`}
            >
                <div className="">{third_content}</div>
            </div>
        </div>
    ) : columns === 2 ? (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`state0 target w-[100%] md:w-1/2 bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black duration-500 justify-center align-middle items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
            <div
                className={`state1 hidden md:target md:w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap justify-center duration-500 align-middle items-center`}
            >
                <div className="desc">{description}</div>
            </div>
        </div>
    ) : description ? (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`state0 target w-[100%] md:w-1/2 bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black duration-500 items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
            <div
                className={`state1 hidden md:target w-1/2  bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap duration-500`}
            >
                <div className="">{description}</div>
            </div>
        </div>
    ) : (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`state0 target w-[100%] bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black duration-500 items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto text-xl md:text-2xl h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
        </div>
    );
}

function MathCell({ formula, description, importance, jax }: MathCellProps) {
    return description ? (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`target w-1/2 bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto text-xl md:text-2xl h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
            <div
                className={`target w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap justify-center duration-500 align-bottom`}
            >
                <div className="flex justify-center items-center text-center h-[100%] w-[100%] p-2">
                    {description}
                </div>
            </div>
        </div>
    ) : (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`state0 state1 state2 target w-[100%] bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto text-2xl h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
        </div>
    );
}

function SetDefault() {
    return 0;
}
function CellSeparator({ title }: CellSeparatorProps) {
    const [displayValue, setDisplayValue] = useState(SetDefault);

    const screenWidth = window.innerWidth;
    let state0: Array<any> = Array.from(document.querySelectorAll(".state0"));
    let state1: Array<any> = Array.from(document.querySelectorAll(".state1"));
    let state2: Array<any> = Array.from(document.querySelectorAll(".state2"));

    function Forward() {
        console.log(displayValue);
        if (displayValue === 0) {
            state0.forEach(function (element) {
                element.classList.remove("target");
                element.classList.remove("w-[100%]");
                element.classList.add("hidden");
            });

            console.log(displayValue);

            // setDisplayValue(1);
        } else if (displayValue === 1) {
            console.log("de");
            setDisplayValue(2);
        }
    }

    function Reverse() {
        // console.log(displayValue);

        // if (displayValue === 2) {
        //     HandleStateChange(2, 1);
        //     setDisplayValue(1);
        // } else if (displayValue === 1) {
        //     state0.forEach(function (element) {
        //         element.classList.add("target");
        //     });
        //     state0.forEach(function (element) {
        //         element.classList.add("w-[100%]");
        //     });
        //     state0.forEach(function (element) {
        //         element.classList.remove("hidden");
        //     });
        //     setDisplayValue(0);
        // } else if (displayValue === 0) {
        //     setDisplayValue(0);
        // }

        console.log(displayValue);
    }

    return (
        <div
            className={`bg-slate-500 mx-auto text-center flex justify-center font-bold mb-[0.0625rem] p-3 border-black border-2 border-b-0 mt-8 text-xl md:text-2xl separator`}
        >
            {screenWidth < 700 ? <button onClick={Reverse}>{"<"}</button> : ""}
            {title}
            {screenWidth < 700 ? <button onClick={Forward}>{">"}</button> : ""}
        </div>
    );
}

export default MathCell;
export { MultiCell, MathCell, CellSeparator };
