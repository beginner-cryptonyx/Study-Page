import "../App.css";
import { MathJax } from "better-react-mathjax";
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
    columns,
    jax,
}: MultiCellProps) {
    return columns === 1 ? (
        jax ? (
            <MathCell
                formula={formula}
                description=""
                importance={importance}
                jax={true}
            />
        ) : (
            <div
                className={`formula-cell-2 ${
                    importance ? importance : "normal"
                }`}
            >
                <div
                    className={`target w-[100%] bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center`}
                >
                    <div className="mx-auto text-3xl h-fit">{formula}</div>
                </div>
            </div>
        )
    ) : columns === 2 ? (
        jax ? (
            <MathCell
                formula={formula}
                description={description}
                importance={importance}
                jax={true}
            />
        ) : (
            <div
                className={`formula-cell-2 ${
                    importance ? importance : "normal"
                }`}
            >
                <div
                    className={`target w-1/2 bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center`}
                >
                    <div className="mx-auto text-3xl h-fit">{formula}</div>
                </div>
                <div
                    className={`target w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap justify-center align-bottom`}
                >
                    <div className="desc text-center h-[100%] w-[100%] p-2">
                        {description}
                    </div>
                </div>
            </div>
        )
    ) : columns === 3 ? (
        <h1>Under Progress</h1>
    ) : (
        <h1>Under Progress</h1>
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
                <div className="mx-auto text-3xl h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
            <div
                className={`target w-1/2 bg-gradient-to-l border border-gray-900 p-2 border-r-2 border-r-black flex-wrap justify-center align-bottom`}
            >
                <div className="desc text-center h-[100%] w-[100%] p-2">
                    {description}
                </div>
            </div>
        </div>
    ) : (
        <div className={`formula-cell-2 ${importance ? importance : "normal"}`}>
            <div
                className={`target w-[100%] bg-gradient-to-r border border-gray-800 border-solid border-l-2 border-l-black flex duration-500 justify-center align-middle items-center ${
                    jax ? "_jax" : ""
                }`}
            >
                <div className="mx-auto text-3xl h-fit">
                    {jax ? <MathJax>{`$${formula}$`}</MathJax> : formula}
                </div>
            </div>
        </div>
    );
}

function CellSeparator({ title }: CellSeparatorProps) {
    return (
        <div className="bg-slate-500 mx-auto text-center font-bold mb-[0.0625rem] p-3 border-black border-2 border-b-0 mt-8 text-3xl">
            {title}
        </div>
    );
}

export default MathCell;
export { MultiCell, MathCell, CellSeparator };
