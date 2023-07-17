import { MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJaxContext } from "better-react-mathjax";

const mathJaxConfig = {
    loader: { load: ["[tex]/html"] },
    tex: {
        packages: { "[+]": ["html"] },
        inlineMath: [["$", "$"]],
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
        ],
    },
};

const AlgebraicMathFormulae: Array<Array<any>> = [
    [`(a + b)^2 = a^2 + b^2 +2ab`, "Algebric Indentity #1", "normal"],
    [`(a - b)^2 = a^2 + b^2 -2ab`, "Algebraic Identity #2 ", "normal"],
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

const GeometricalMathFormulae: Array<Array<any>> = [
    [`P = 2 \\cdot (L+B)`, "Calculation perimeter of rectangle.", "normal"],
    [`P = 4s`, "Used to calculate perimeter of rectangle.", "normal"],
    [
        `C = \\pi d \\text{ or } 2\\pi r`,
        "Used to calculate perimeter of circle",
        "normal",
    ],
    [`A = s^2`, "Used to calculate area of square", "normal"],
    [`A = L\\cdot B`, "Used to calculate area of rectangle", "normal"],
    [
        `A = \\frac{1}{2} \\cdot bh`,
        "Used to calculate area of triangle",
        "normal",
    ],
    [`A = \\pi r^2`, "Used to calculate area of circle", "normal"],
    [`V = L\\cdot B\\cdot H`, "Used to calculate volume of cuboid", "normal"],
    [`V = s^3`, "Used to calculate volume of cube", "normal"],
    [`V = \\pi r^2h`, "Used to calculate volume of cylinder", "normal"],
    [
        `V = \\text{Area of Cross-Section} \\cdot  \\text{height}`,
        "Used to calculate volume of any regular 3d shape",
        "normal",
    ],
    [
        `A = \\frac{a+b}{2} \\cdot h`,
        "Used to calculate area of trapezium",
        "normal",
    ],
    [
        `C = \\frac{\\theta}{360}\\cdot \\pi r^2`,
        "Used to calculate area of a sector",
        "external",
    ],
    [
        `C = \\frac{\\theta}{360}\\cdot 2\\pi r`,
        "Used to calculate arc length",
        "external",
    ],
    [
        `V = \\frac{1}{3} \\cdot \\pi r^2h`,
        "Used to calculate volume of cone",
        "normal",
    ],
    [
        `\\text{SA} = 4\\pi r^2`,
        "Used to calculate surface area of sphere",
        "normal",
    ],
    [
        `V = \\frac{4}{3} \\pi r^3`,
        "Used to calculate volume of sphere",
        "extra",
    ],
    [
        `a^2 + b^2 = c^2`,
        "Pythagoras theorem, used to calculate various sides of a right angles triangle",
        "normal",
    ],
    [
        `\\text{SF(Area)} = \\text{SF(length)}^2`,
        "Used to calculate scale factor of Area.",
        "normal",
    ],
    [
        `\\text{SF(Volume)} = \\text{SF(length)}^3`,
        "Used to calculate scale factor of volume.",
        "normal",
    ],
    [
        `\\sin{\\theta} = \\frac{O}{H}`,
        "Trigonometric formula which is used to calculate angle using opposite and hypotenuse",
        "important",
    ],
    [
        `\\cos{\\theta} = \\frac{A}{H}`,
        "Trigonometric formula which is used to calculate angle using Adjacent and hypotenuse",
        "important",
    ],
    [
        `\\tan{\\theta} = \\frac{O}{A}`,
        "Trigonometric formula which is used to calculate angle using opposite and Adjacent",
        "important",
    ],
    [
        `sin^2θ + cos^2θ = 1`,
        "Trigonometric formula which gives a product of 1",
        "normal",
    ],
    [`\\sin{θ} = \\sin{180 - θ}`, "Alternative sine formula", "important"],
    [`cos(θ) = -cos(180 - θ)`, "Alternative cosine formula", "important"],
    [
        `cos(θ) = cos(360-θ)`,
        "Alternative cosine formula which has positive value",
        "important",
    ],
    [`tan(θ) = tan(180 + θ)`, "Alternative Tangent formula", "important"],
    [
        `\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}
    `,
        "Used to calculate sides and angles of a triangle",
        "important",
    ],
    [
        `\\text{main side} = (other sides)² \\
         - 2(other sides) *Cos(main angle)`,
        "",
        "external",
    ],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
];
function FormulaeMath() {
    return (
        <>
            <MathJaxContext config={mathJaxConfig} version={3}>
                <div className="mt-4"></div>

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

                <MUIaccordion
                    content={[
                        "Shape Chapters",
                        GeometricalMathFormulae.map((formula_holder, index) => (
                            <MathCell
                                formula={formula_holder[0]}
                                description={formula_holder[1]}
                                importance={formula_holder[2]}
                                key={index}
                            />
                        )),
                    ]}
                />
            </MathJaxContext>
        </>
    );
}

export default FormulaeMath;
