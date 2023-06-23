import "../App.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
const Mathml2latex = require("mathml-to-latex");
interface MathCellProps {
    formula: any;
    description: string;
    importance?: string;
}

function MathCell({ formula, description, importance }: MathCellProps) {
    // const [color, setColor] = useState(
    //     (importance = "normal"
    //         ? "fs_green"
    //         : (importance = "important" ? "fs_red" : "fs_grey"))
    // );

    const mathJaxConfig = {
        tex: {
          inlineMath: [["$", "$"]],
        },
      };

    const latex_formula = Mathml2latex.convert(formula);
    // switch (importance) {
    //     case "normal":
    //         setColor("fs_green");
    //         break;

    //     case "important":
    //         setColor("fs_red");
    //         break;

    //     case "external":
    //         setColor("fs_gray");
    // }

    return (
        <div
            className={`flex flex-row w-[70vw] mx-auto text-center formula-cell-2 duration-500`}
        >
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

export default MathCell;
