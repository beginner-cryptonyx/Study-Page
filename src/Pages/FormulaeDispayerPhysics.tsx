import { MultiCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Point from "../components/Point";

const Formulae: Array<Array<any>> = [
    [
        `\\text{density} = \\frac{\\text{mass}}{\\text{volume}}`,
        "Density formula",
        "normal",
        "",
        "true",
        "3rd content",
    ],
    [
        `\\text{speed} = \\frac{\\text{distance}}{\\text{time}}`,
        "speed formula",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `\\text{acceleration} = \\frac{\\triangle \\text{distance}}{\\triangle\\text{time}} = \\frac{v - u}{t}`,
        "Acceleration formula",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [`F = ma`, "Formula of force", "normal", 1, "jax", "3rd content"],
    [`weight = mass ⋅ g`, "Formula of weight", "normal", 1, "", "3rd content"],
    [
        `momentum = mass ⋅ velocity`,
        "Formula of momentum",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `impulse = force ⋅ time`,
        "Formula for Impulse",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `impulse = ∆ change in momentum`,
        "2nd Formula for Impulse",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <p>
            resultant force{" "}
            <MathJax>
                {
                    "$ = \\frac{\\text{∆ change in momentum [or impulse]}}{\\text{∆ time taken}}$"
                }
            </MathJax>
        </p>,
        "description",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `v^2 = u^2 + 2as`,
        <Point
            points={[
                "Newtons Equation of Motion #1",
                "v is final velocity, u is initial velocity, t is time, a is acceleration and s is distance/displacement",
            ]}
        ></Point>,
        "external",
        1,
        "jax",
        "3rd content",
    ],
    [
        `s = ut + \\frac{at^2}{2}`,
        <Point
            points={[
                "Newtons Equation of Motion #2",
                "v is final velocity, u is initial velocity, t is time, a is acceleration and s is distance/displacement",
            ]}
        ></Point>,
        "external",
        1,
        "jax",
        "3rd content",
    ],

    [
        `v = u + at`,
        <Point
            points={[
                "Newtons Equation of Motion #3",
                "v is final velocity, u is initial velocity, t is time, a is acceleration and s is distance/displacement",
            ]}
        ></Point>,
        "external",
        1,
        "jax",
        "3rd content",
    ],
    [
        `moment = perpendicular distance ⋅ force`,
        "formula of moment about a point",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `load of spring = spring constant ⋅ extension`,
        "formula of load of spring",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `pressure = force / area`,
        "pressure formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `liquid pressure = density ⋅ g ⋅ depth`,
        "formula of liquid pressure",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [`p_1 v_1 = p_2 v_2`, "Boyle's Law", "normal", 1, "jax", "3rd content"],
    [
        `work = distance ⋅ Force`,
        "formula of work",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `G.P.E = mass ⋅ g ⋅ height from ground`,
        "formula of Gravitational Potential Energy",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `\\text{K.E} = \\frac{1}{2} \\cdot mv^2`,
        "kinetic energy formula",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `\\text{GPE = KE} \\rightarrow mgh = \\frac{1}{2} \\cdot mv^2`,
        "Loss of potential energy is gain in kinetic energy",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `power = work done / ∆ time taken`,
        "power formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `power = energy transferred / ∆ time taken`,
        "power formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `efficiency = useful work / total energy input`,
        "efficiency formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `efficiency = useful energy / total energy`,
        "efficiency formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `efficiency = useful power / total power`,
        "efficiency formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `Latent Heat = Mass ⋅ Specific Latent Heat`,
        "Latent Heat Formula",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `kelvin = degrees Celsius + 273`,
        "formula of kelvin from Celsius scale",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `Energy transfer = mc⋅∆T`,
        "specific heat capacity",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `speed of wave = frequency ⋅ wavelength`,
        "formula of speed of wave",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `speed of echo sound = (2 ⋅ distance to wall)/(echo time)`,
        "formula to find the speed of an echo",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `speed of sound = (distance traveled)/(time taken)`,
        "formula to find the speed of sound",
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `n = \\frac{\\sin{i}}{\\sin{r}}`,
        "Formula for refractive index",
        "important",
        1,
        "jax",
        "3rd content",
    ],
    [
        `\\sin{c} = \\frac{1}{n}`,
        "Formula to calculate critical angle",
        "important",
        1,
        "jax",
        "3rd content",
    ],
    [
        `I = \\frac{Q}{T}`,
        "formula to calculate current from charge and time, I is current, Q is charge and T is time",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `V = \\frac{W}{Q}`,
        "formula to calculate voltage from work done and charge, V is voltage, W is work done and Q is charge",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `V = IR`,
        "ohm's law, R is resistance, V is voltage and A is current",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `R = \\rho \\cdot \\frac{L}{A}`,
        "ρ -> resistivity {Formula for Resistivity}",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `\\frac{R_a\\cdot A_a}{L_a} = \\frac{R_b\\cdot A_b}{L_b}`,
        "formula used to calculate the resistance of another wire from another wire with the same resistivity",
        "important",
        1,
        "jax",
        "3rd content",
    ],
    [
        `R = R_1 + R_2 + R_n`,
        "Formula used to calculate the total resistance of a series circuit",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_n}`,
        "formula use to calculate the total resistance of a parallel circuit",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `P = VI`,
        "formula used to calculate the electrical power of a circuit",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `E = VIT`,
        "formula used to calculate the energy transferred in a circuit, E is the energy transferred, I is the current and t is the time taken.",
        "normal",
        1,
        "jax",
        "3rd content",
    ],
    [
        `\\frac{V_p}{V_s} = \\frac{N_s}{N_p}`,
        "formula used to calculate the number of coils present in the primary and secondary circuit from the input and output voltage",
        "important",
        1,
        "jax",
        "3rd content",
    ],
    [
        `V_p \\cdot I_p = V_s \\cdot I_s`,
        "formula used to calculate the amount of current reduced and the voltage increased, by knowing the power",
        "important",
        1,
        "jax",
        "3rd content",
    ],
    // [`formulae`, "description", "normal", 1, "jax", "3rd content"],
];

const Laws: Array<Array<any>> = [
    [
        `Newton's first law of motion`,
        "If no external force is acting on it, an object will -if stationary, remain stationary -if moving, keep moving at a steady speed in a straight line",
        "normal",
    ],

    [
        `Newton's second law of motion`,
        "F = ma, this relationship between force, mass and acceleration is sometimes called newton's second law of motion",
        "normal",
    ],
    [
        `Newton's third law of motion`,
        "every reaction has an equally likely opposite reaction",
        "normal",
    ],
    [
        `Conservation of momentum`,
        "When two or more objects act on each other, their total momentum remains constant, provided no external forces are acting",
        "normal",
    ],
    [
        `Principle of moments`,
        "If an object is in equilibrium: the sum of the clockwise moments about any point is equal to the sum of the anticlockwise moments about that points",
        "normal",
    ],
    [`Hooke's law`, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
    [``, "", "normal"],
];
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

function FormulaePhysics() {
    return (
        <div className="container">
            <MathJaxContext config={mathJaxConfig} version={3}>
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Physics Formulae",
                        Formulae.map((element_data, index) =>
                            element_data[0] === "separator" ? (
                                <CellSeparator title={element_data[1]} />
                            ) : element_data[0] === "element" ? (
                                element_data[1]
                            ) : (
                                <MultiCell
                                    formula={element_data[0]}
                                    description={element_data[1]}
                                    importance={element_data[2]}
                                    columns={element_data[3]}
                                    jax={element_data[4] ? true : false}
                                    third_content={element_data[5]}
                                    key={index}
                                ></MultiCell>
                            )
                        ),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Physics Laws",
                        Laws.map((element_data, index) =>
                            element_data[0] === "separator" ? (
                                <CellSeparator title={element_data[1]} />
                            ) : element_data[0] === "element" ? (
                                element_data[1]
                            ) : (
                                <MultiCell
                                    formula={element_data[0]}
                                    description={element_data[1]}
                                    importance={element_data[2]}
                                    columns={element_data[3]}
                                    jax={element_data[4] ? true : false}
                                    third_content={element_data[5]}
                                    key={index}
                                ></MultiCell>
                            )
                        ),
                    ]}
                />
            </MathJaxContext>
        </div>
    );
}

export default FormulaePhysics;
