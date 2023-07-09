import { MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";

const AlgebraicMathFormulae: Array<Array<any>> = [
    [`\(a + b\)^2 = a^2 + b^2 +2ab`, "Algebric Indentity #1", "normal"],
    [`\(a - b\)^2 = a^2 + b^2 -2ab`, "Algebraic Identity #2 ", "normal"],
    [`x^n × x^m = x^{m + n}`, "Algebraic Identity #3", "normal"],
    [`a^2 - b^2 = \(a + b\)×\(a - b\)`, "Algebraic Identity #3", "normal"],
    [`a^2 - b^2 = \(a + b\)×\(a - b\)`, "Algebraic Identity #3", "normal"],
    [`a^2 - b^2 = \(a + b\)×\(a - b\)`, "Algebraic Identity #3", "normal"],
    [`a^2 - b^2 = \(a + b\)×\(a - b\)`, "Algebraic Identity #3", "normal"],
    [`a^2 - b^2 = \(a + b\)×\(a - b\)`, "Algebraic Identity #3", "normal"],
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
