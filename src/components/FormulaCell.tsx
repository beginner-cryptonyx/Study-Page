import "../App.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
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
// Mathml2latex.convert(formula);
function MathCell({ formula, description, importance }: MathCellProps) {
    return (
        <div
            className={`formula-cell-2 ${
                importance ? importance : "normal"
            }`}
        >
            <div
                className={`w-1/2 bg-gradient-to-r border border-gray-800 border-solid p-2  border-l-2 border-l-black flex duration-500`}
            >
                <MathJaxContext config={mathJaxConfig}>
                    <MathJax className="m-auto text-3xl p-1">{`$${formula}$`}</MathJax>
                </MathJaxContext>
            </div>
            <div
                className={`w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex text-center justify-center align-middle duration-500`}
            >
                <div className="mt-1.5">
                    {description}
                </div>
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
