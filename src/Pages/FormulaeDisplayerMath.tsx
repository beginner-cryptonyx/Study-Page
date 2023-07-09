import { MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";

const AlgebraicMathFormulae: Array<Array<any>> = [
    [`\(a + b\)^2 = a^2 + b^2 +2ab`, "Algebric Indentity #1", "normal"],
    [`\(a - b\)^2 = a^2 + b^2 -2ab`, "Algebraic Identity #2 ", "normal"],
    [`a^2 - b^2 = (a + b) \\cdot (a - b)`, "Algebraic Identity #3 ", "normal"],
    [
        `x^n \\cdot x^m = x^{m + n}`,
        "Multiplying The Same Number With Indices",
        "normal",
    ],
    [
        `\\frac{x^m}{x^n} = x^{m-n}`,
        "Dividing The Same Number With Indices",
        "normal",
    ],
    [
        `(x^n)^m = x^{n \\cdot m}`,
        "Adding An Exponent To A Number Already Having One",
        "normal",
    ],
    [
        `(\\frac{y}{x})^n = \\frac{y^n}{x^n}`,
        "Adding An Exponent To A Fraction",
        "normal",
    ],
    [`x^{-m} = \\frac{1}{x^m}`, "Number With Negative Exponent", "normal"],
    [
        `x^{\\frac{m}{n}} = \\sqrt[n]{x^m}`,
        "Number With A Fractional Exponent",
        "normal",
    ],
];

function FormulaeMath() {
    return (
        <>
            <div className="mt-4"></div>
            {/* <Accordion
                title="Algebraic Identities and Law's of indices"
                content=""
            /> */}

            <MUIaccordion
                content={[
                    "Algebraic Identities and Law's of indices",
                    AlgebraicMathFormulae.map((formula_holder, index) => (
                        <MathCell
                            formula={formula_holder[0]}
                            description={formula_holder[1]}
                            importance={formula_holder[2]}
                            key={index}
                        />
                    )),
                ]}
            />
        </>
    );
}

export default FormulaeMath;
