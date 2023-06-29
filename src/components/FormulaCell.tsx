import "../App.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
const Mathml2latex = require("mathml-to-latex");
export interface MathCellProps {
    formula: string;
    description: string;
    importance?: string;
}

export interface CellSeparatorProps {
    title: string;
}

const mathJaxConfig = {
    tex: {
        inlineMath: [["$", "$"]],
    },
};

function MathCell({ formula, description, importance }: MathCellProps) {
    const latex_formula = Mathml2latex.convert(formula);

    return (
        <div className={`formula-cell-2 duration-500 ${importance ? importance : 'normal'}`}>
            <div
                className={`w-1/2 bg-gradient-to-r border border-gray-800 border-solid p-2  border-l-2 border-l-black duration-500`}
            >
                <MathJaxContext config={mathJaxConfig}>
                    <MathJax>{`$${latex_formula}$`}</MathJax>
                </MathJaxContext>
            </div>
            <div
                className={`w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black duration-500`}
            >
                {description}
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
