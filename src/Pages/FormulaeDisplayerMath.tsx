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
        `\\text{main side} = \(\\text{other sides}\)^2 \\
         - 2\(\\text{other sides}\) \\times \\cos\(\\text{main angle}\)`,
        "simplifies cosine ratios, main side is the side you want to use, main angle is the angle opposite to the side you want to find, if you learn to use this there is no need to remember the above 3 formulas",
        "external",
    ],
    [
        `A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin{C}`,
        "Using to calculate area of triangle when height is not given",
        "important",
    ],
    [
        `\\text{Area} = \\frac{1}{2} \\cdot \\text{given sides} \\cdot \\text{sin(given angle)}`,
        "Using to calculate area of triangle when height is not given",
        "normal",
    ],
    [
        `Area = \\frac{1}{2} \\cdot \\text{(given sides)} \\cdot \\text{sin(given angle)}`,
        "Simplifies the above formula",
        "external",
    ],
    ["separator", "Circle Theorems"],
    [`The angle in a semi circle is a right angle`, "", "normal", "false"],
    [
        `The angle between the tangent and radius is 90 degrees`,
        "",
        "normal",
        "false",
    ],
    [
        `
        The angle at the center of a circle is twice the angle at the circumference`,
        "",
        "normal",
        "false",
    ],
    [`angles in the same segment are equal`, "", "normal", "false"],
    [
        `The opposite angles of a cyclic quadrilateral add up to 180 degrees`,
        "",
        "normal",
        "false",
    ],
    [
        `Each exterior angle of a cyclic quadrilateral is equal to the interior angle opposite to it`,
        "",
        "normal",
        "false",
    ],
    [
        `Angle subtended by the diameter on the circumference is 90 degrees`,
        "",
        "normal",
        "false",
    ],
    [
        `The angle between the tangent and the chord is equal to the angle in alternate segment`,
        "Alternate segment theorem",
        "normal",
        "false",
    ],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
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
                        AlgebraicMathFormulae.map((formula_holder, index) =>
                            formula_holder[0] === "separator" ? (
                                <CellSeparator
                                    title={formula_holder[1]}
                                ></CellSeparator>
                            ) : (
                                <MathCell
                                    formula={formula_holder[0]}
                                    description={formula_holder[1]}
                                    importance={formula_holder[2]}
                                    key={index}
                                />
                            )
                        ),
                    ]}
                />

                <MUIaccordion
                    content={[
                        "Algebraic Identities and Law's of indices",
                        GeometricalMathFormulae.map((formula_holder, index) =>
                            formula_holder[0] === "separator" ? (
                                <CellSeparator
                                    title={formula_holder[1]}
                                ></CellSeparator>
                            ) : (
                                <MathCell
                                    formula={formula_holder[0]}
                                    description={formula_holder[1]}
                                    importance={formula_holder[2]}
                                    key={index}
                                />
                            )
                        ),
                    ]}
                />
            </MathJaxContext>
        </>
    );
}

export default FormulaeMath;
