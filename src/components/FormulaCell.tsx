import "../App.css";
import {MathJax } from "better-react-mathjax";
export interface MathCellProps {
    formula: string;
    description: string;
    importance?: string;
}
export interface CellSeparatorProps {
    title: string;
}

// Mathml2latex.convert(formula);
function MathCell({ formula, description, importance }: MathCellProps) {
    return (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`target w-1/2 bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center`}
            >
                <div className="mx-auto text-3xl h-fit">
                    <MathJax >
                        {`$${formula}$`}
                    </MathJax>
                </div>
            </div>
            <div
                className={`target w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap justify-center align-bottom`}
            >
                <div className="desc text-center h-[100%] w-[100%] p-2">{description}</div>
            </div>
        </div>
    );
}

function CellSeparator({ title }: CellSeparatorProps) {
    return (
        <div className="bg-slate-500 w-[70vw] mx-auto text-center font-bold mb-[0.0625rem] p-3 border-black border-1 border-x-2 mt-8 text-3xl">
            {title}
        </div>
    );
}

export default MathCell;
export { MathCell, CellSeparator };
