import { MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJaxContext } from "better-react-mathjax";
import Formulae from "./Displayer";

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
    [`separator`, "Algebraic Identities"],
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
    ["separator", "Sequences"],
    [
        `a_n = a_1 + (n - 1)\\cdot d`,
        "formula for finding nth term of an arithmetic sequence",
        "normal",
    ],
    [
        `a_n = ar^{n-1}`,
        "formula for finding nth term of an geometric progression (eg: 1,3,9,27)",
        "external",
    ],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
];

const GeometricalMathFormulae: Array<Array<any>> = [
    ["separator", "Perimeter, Area and Volume"],
    [`P = 2 \\cdot (L+B)`, "Calculation perimeter of rectangle.", "normal"],
    [`P = 4s`, "Used to calculate perimeter of rectangle.", "normal"],
    [
        `C = \\pi d \\text{ or } 2\\pi r`,
        "Used to calculate perimeter of circle",
        "important",
    ],
    [`A = s^2`, "Used to calculate area of square", "normal"],
    [`A = L ⋅ B`, "Used to calculate area of rectangle", "normal", "false"],
    [
        `A = \\frac{1}{2} \\cdot bh`,
        "Used to calculate area of triangle",
        "normal",
    ],
    [`A = \\pi r^2`, "Used to calculate area of circle", "important"],
    [`V = L⋅B⋅H`, "Used to calculate volume of cuboid", "normal", "false"],
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
        "normal",
    ],
    [
        `C = \\frac{\\theta}{360}\\cdot 2\\pi r`,
        "Used to calculate arc length",
        "normal",
    ],
    [
        `V = \\frac{1}{3} \\cdot \\pi r^2h`,
        "Used to calculate volume of cone",
        "external",
    ],
    [
        `\\text{SA} = 4\\pi r^2`,
        "Used to calculate surface area of sphere",
        "external",
    ],
    [
        `V = \\frac{4}{3} \\pi r^3`,
        "Used to calculate volume of sphere",
        "external",
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
    ["separator", "Trigonometry"],
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
    [`\\sin{θ} = \\sin{180 - θ}`, "Alternative sine formula", "normal"],
    [`cos(θ) = -cos(180 - θ)`, "Alternative cosine formula", "normal"],
    [
        `cos(θ) = cos(360-θ)`,
        "Alternative cosine formula which has positive value",
        "normal",
    ],
    [`tan(θ) = tan(180 + θ)`, "Alternative Tangent formula", "normal"],
    [
        `\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}
    `,
        "Used to calculate sides and angles of a triangle",
        "normal",
    ],

    [`c^2 = a^2 + b^2 -2ab\\cos{C}`, "Cosine rule", "important"],
    [
        `\\text{main side}^2 = (\\text{other sides}\)^2 \\
         - 2(\\text{other sides}) \\times \\cos(\\text{main angle})`,
        "simplifies cosine ratios, main side is the side you want to use, main angle is the angle opposite to the side you want to find, if you learn to use this there is no need to remember the above 3 formulas",
        "external",
    ],
    [
        `A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin{C}`,
        "Using to calculate area of triangle when height is not given",
        "important",
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
        "",
        "normal",
        "false",
    ],
    ["separator", "Miscellaneous"],
    [
        `\\frac{\\triangle_y}{\\triangle_x} = \\text{gradient} = \\text{speed}`,
        "used to find the speed in a distance time graph",
        "normal",
    ],
    [
        `F = k \\cdot D`,
        "Formula used to solve direct proportionality problems",
        "normal",
    ],
    [
        `F = K \\cdot \\frac{1}{D}`,
        "Formula used to solve inverse proportionality problems",
        "normal",
    ],
];

const GraphicalQuadraticMathFormulae: Array<Array<any>> = [
    ["separator", "<< THE MOST IMPORTANT FORMULA IN THE BOOK >>"],

    [
        `\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}`,
        "Used to solve quadratic equations",
        "important",
    ],

    ["separator", "Straight Line Graphs"],
    [
        `m = \\frac{y_2 - y_1}{x_2 - x_1}`,
        "Formula for gradient, x2 and y2 are in the same point, so is x1 and y1",
        "normal",
        "",
    ],
    [
        `d = \\sqrt{\(x_2 - x_1\)^2 + \(y_2 - y_1\)^2}`,
        "Formula for finding distance between 2 points on a graph, x2 and y2 are in the same point, so is x1 and y1",
        "normal",
        "",
    ],
    [
        `(\\frac{x_1 + x_2}{2},\\frac{y_1 + y_2}{2})`,
        "Formula for finding the midpoint of 2 points on a graph, x2 and y2 are in the same point, so is x1 and y1",
        "normal",
        "",
    ],

    ["separator", "Curved Line Graphs"],
    [
        `x = \\frac{-b}{2a}`,
        "Used to find the x intercept of the turning point of a parabola",
        "normal",
    ],
    [
        `ax^2 + bx + c = 0`,
        "used to find the x intercept of a parabola by making the y value as 0, in the equation",
        "normal",
    ],
    [`y = \\frac{a}{x} + q`, "general formula for hyperbola", "normal"],
    [`ax^2 + bx + c`, "general formula for a quadratic equation", "normal"],
    [`y = a^x`, "general formula for exponential graphs", "normal"],
    [`y = x^2`, "general formula for simple quadratic graphs", "normal"],
    [`y = x^3`, "general formula for simple cubic graphs", "normal"],

    ["separator", "Differentiation"],
    [
        `\\text{if:‎  ‎} y = x, \\frac{dy}{dx} \\text{‎  or  ‎} f'(x) = 0`,
        "derivation for a numerical value",
        "normal",
    ],
    [
        `\\text{if:‎  ‎} y = nx, \\frac{dy}{dx} \\text{‎  or  ‎} f'(x) = n`,
        "derivation for a variable",
        "normal",
    ],
    [
        `\\text{if:‎  ‎} y = nx^a, \\frac{dy}{dx} \\text{‎  or  ‎} f'(x) = (a\\cdot n\\cdot x^{n-1})`,
        "derivation for a variable to the power higher than 1",
        "normal",
    ],
];

const StatisticalMathFormulae: Array<Array<any>> = [
    ["separator", "Statistics"],

    [
        `\\text{Mean} = \\frac{\\sum{x_i \\cdot f_i}}{\\sum{f_i}}`,
        "Used to calculate mean",
        "normal",
    ],
    [
        `\\text{median} = \\frac{f_i}{2}`,
        "Used to calculate the middle number",
        "normal",
    ],
    [
        `\\text{Range = highest - lowest}`,
        "Used to calculate the range",
        "normal",
    ],
    [`Q_1 = \\frac{1}{4} \\cdot \(n + 1\)`, "Finding lower quartile", "normal"],
    [`Q_3 = \\frac{3}{4} \\cdot \(n + 1\)`, "Finding upper quartile", "normal"],
    [`IQR = Q_3 - Q_1`, "Used to calculate inter quartile ranges", "normal"],

    [`fd = \\frac{f}{cw}`, "Used to calculate the frequency density", "normal"],
    [
        `P = \\frac{pn}{100}`,
        "Used to find the position of a percentile",
        "normal",
    ],
    [`separator`, "Probability"],
    [
        `P(A) = (number of favorable outcomes)/(number of possible outcomes)`,
        "probability of A occurring",
        "normal",
        "false",
    ],
    [` P(Ā) = 1 - P(A)`, "probability of A not occurring", "normal"],
    [
        `P(\\text{A & B}) = P(A) \\cdot P(B)`,
        "Probability of A and B Occurring",
        "normal",
    ],
    [
        `P(\\text{A or B}) = P(A) + P(B)`,
        "Probability of A or B Occurring",
        "normal",
    ],
    [``, "", "normal"],
];

function FormulaeMath() {
    return (
        <div className="container">
            <div className="pt-10"></div>

            <MathJaxContext config={mathJaxConfig} version={3}>
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
                                    jax={formula_holder[3] ? false : true}
                                    key={index}
                                />
                            )
                        ),
                    ]}
                />

                <div className="separator">‎</div>

                <MUIaccordion
                    content={[
                        "Geometry",
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
                                    jax={formula_holder[3] ? false : true}
                                    key={index}
                                />
                            )
                        ),
                    ]}
                />

                <div className="separator">‎</div>

                <MUIaccordion
                    content={[
                        "Polynomials and Graphs",
                        GraphicalQuadraticMathFormulae.map(
                            (formula_holder, index) =>
                                formula_holder[0] === "separator" ? (
                                    <CellSeparator
                                        title={formula_holder[1]}
                                    ></CellSeparator>
                                ) : (
                                    <MathCell
                                        formula={formula_holder[0]}
                                        description={formula_holder[1]}
                                        importance={formula_holder[2]}
                                        jax={formula_holder[3] ? false : true}
                                        key={index}
                                    />
                                )
                        ),
                    ]}
                />

                <div className="separator">‎</div>

                <MUIaccordion
                    content={[
                        "Statistics And Probability",
                        StatisticalMathFormulae.map((formula_holder, index) =>
                            formula_holder[0] === "separator" ? (
                                <CellSeparator
                                    title={formula_holder[1]}
                                ></CellSeparator>
                            ) : (
                                <MathCell
                                    formula={formula_holder[0]}
                                    description={formula_holder[1]}
                                    importance={formula_holder[2]}
                                    jax={formula_holder[3] ? false : true}
                                    key={index}
                                />
                            )
                        ),
                    ]}
                />
            </MathJaxContext>
        </div>
    );
}

export default FormulaeMath;
