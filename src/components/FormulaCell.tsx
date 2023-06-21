import "../App.css";
import { useState } from "react";
import { MathComponent } from "mathjax-react";

interface MathCellProps {
    formula: any;
    description: string;
    importance?: string;
}

function MathCell({ formula, description, importance }: MathCellProps) {
    const [color, setColor] = useState(
        (importance = "normal"
            ? "fs_green"
            : (importance = "important" ? "fs_red" : "fs_grey"))
    );

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
                {formula}
                <MathComponent
                    tex={String.raw`
                <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                <mi>x</mi> <mo>=</mo>
                <mrow>
                  <mfrac>
                    <mrow>
                      <mo>&#x2212;</mo>
                      <mi>b</mi>
                      <mo>&#x00B1;</mo>
                      <msqrt>
                        <msup><mi>b</mi><mn>2</mn></msup>
                        <mo>&#x2212;</mo>
                        <mn>4</mn><mi>a</mi><mi>c</mi>
                      </msqrt>
                    </mrow>
                    <mrow>
                      <mn>2</mn><mi>a</mi>
                    </mrow>
                  </mfrac>
                </mrow>
                <mtext>.</mtext>
              </math>
                `}
                />
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
