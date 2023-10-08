import { MultiCell } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Point from "../components/Point";
const {
    bulb,
    cell,
    cell_group,
    fuse,
    thermistor,
    LDR,
    resistor,
    voltmeter,
    ammeter,
    variable_resistor,
    motor,
} = require("../images/index");

const Laws: Array<Array<any>> = [
    ["separator", "Laws and Statements"],
    [`Law`, "Statement", "external"],
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
    [
        `Hooke's law`,
        "A material obeys hooke's law if, beneath it's elastic limit, the extension is proportional to the load",
        "normal",
    ],
    [
        `Boyle's law`,
        "P1V1 = P2V2, if pressure is halved, then volume is doubled, if pressure is doubled, then volume is halved",
        "normal",
    ],
    [
        `Law of conservation of energy`,
        "Energy can be stored or transferred, but it cannot be created or destroyed",
        "normal",
    ],
    [
        `Laws of reflection`,
        <Point
            points={[
                "1) The angle of incidence is equal to the angle of reflection",
                "2) the incident ray, the reflected raw, and the normal all lie in the same place",
            ]}
        ></Point>,
        "normal",
    ],
    [
        `Snell's law`,
        <Point
            points={[
                "the sines of the two angles are always in proportion",
                "sin(i)/sin(r)",
            ]}
        ></Point>,
        "normal",
    ],
    [
        `Ohm's law`,
        "The current in a circuit is always proportional to the pd, V = IR",
        "normal",
    ],
    [
        `Right hand grip rule`,
        "A rule used to find the field direction produced by a current",
        "normal",
    ],
    [
        `Fleming's left hand rule`,
        "A rule used to find the direction of force",
        "normal",
    ],
    [
        `Faraday's law of electromagnetic induction`,
        "The emf induced in a conductor is proportional to the rate at which magnetic field lines are cut by the conductor",
        "normal",
    ],
    [
        `Lenz's law`,
        "An induced current always flows in a direction such that it opposes the charge which produced it",
        "normal",
    ],
    [
        `Fleming's right hand rule`,
        "A rule used to find the direction of induced current",
        "normal",
    ],
];

const GeneralPhysics: Array<Array<any>> = [
    ["separator", "Formulae"],
    [`Formula`, "Description", "external"],
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
];

const Heat: Array<Array<any>> = [
    ["separator", "Formulae"],
    [
        `Energy transfer = mc⋅∆T`,
        "specific heat capacity",
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
        "Thermal capacity = mass of body ⋅ specific heat",
        "Formula for thermal capacity",
        "external",
    ],
];

const Energetics: Array<Array<any>> = [
    ["separator", "Formulae"],
    [`Formula`, "Description", "external"],
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
    [`power = force x speed`, "power formula", "normal", 1, "", "3rd content"],
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
        `Energy transfer = mc⋅∆T`,
        "specific heat capacity",
        "normal",
        1,
        "",
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
];

const WavesLight: Array<Array<any>> = [
    ["separator", "Formulae"],
    [`Formula`, "Description", "external"],
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
    ["separator", "Convex Lens"],
    ["Object Location", "Image Location", "external", 3, "", "Properties"],
    [
        "∞",
        "Focus",
        "normal",
        3,
        "",
        <Point points={["Real", "Inverted", "Smaller than object"]}></Point>,
    ],
    [
        "At 2×Focus",
        "2×Focus",
        "normal",
        3,
        "",
        <Point points={["Real", "Inverted", "Same size as object"]}></Point>,
    ],
    [
        "Between Focus and 2×Focus",
        "beyond 2×Focus",
        "normal",
        3,
        "",
        <Point points={["Real", "Inverted", "Magnified"]}></Point>,
    ],
    [
        "Focus",
        "∞",
        "normal",
        3,
        "",
        <Point
            points={["Diminished", "Technically Real and Inverted"]}
        ></Point>,
    ],
    [
        "Between Focus and Optical Center",
        "Between Focus and 2×Focus",
        "normal",
        3,
        "",
        <Point points={["Virtual", "Upright", "Magnified"]}></Point>,
    ],
];

const ElectricityMagnetism: Array<Array<any>> = [
    ["separator", "Formulae"],
    [`Formula`, "Description", "external"],
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

    ["separator", "Components, Their functions and symbols"],
    [
        <Point
            points={[
                "Bulb",
                "",
                'Has a filament with very high resistance inside a glass "bulb" filled with nobel gasses, it lights up as resistance generates heat and the thermal energy is converted to light energy`',
            ]}
        ></Point>,
        <img src={bulb} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        `Cell: Has a potential difference`,
        <img src={cell} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={[
                `Voltmeter`,
                "",
                " measures potential difference to component connected parallel to it",
            ]}
        ></Point>,
        <img src={voltmeter} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={["ammeter:", "measures current to any component in series"]}
        ></Point>,
        <img src={ammeter} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={["resistor", "does what it says, creates resistance"]}
        ></Point>,
        <img src={resistor} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={[
                "Variable Resistor / Rheostat",
                "Has a method to increase length of wire in contact with circuit via conductive contacts, works as length of wore is directly proportional to resistance",
            ]}
        ></Point>,
        <img src={variable_resistor} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={[
                "fuze",
                "",
                "Has a wire inside a glass casing, if voltage is too high the resistance increases along with the heat, due to this heat the fuze wire melts and opens the circuit",
            ]}
        ></Point>,
        <img src={fuse} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={[
                "LDR : Light Dependant Resistor",
                "",
                "Resistance is directly proportional to Light exposure and Light intensity",
            ]}
        ></Point>,
        <img src={LDR} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point points={["Battery: is a group of cells"]}></Point>,
        <img src={cell_group} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point points={["Thermistor: changes resistance when temperature changes"]}></Point>,
        <img src={thermistor} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
    [
        <Point
            points={[
                "Motor",
                "",
                "Has Coil made up of copper, it is free to rotate between the poles of a magnet",
                "A commutator (split ring) is fixed to the coil and rotates with it",
                "",
                "There are 2 carbon brushes/contacts which rub against the commutator and ensures it is connected to the battery",
                "",
                <a className="p-2 bg-black bg-opacity-30 text-purple-800 rounded-md" href="https://www.youtube.com/watch?v=CWulQ1ZSE3c">
                    Video Explaining motors
                </a>,
            ]}
        ></Point>,
        <img src={motor} width={"100%"} alt="" />,
        "normal",
        1,
        "",
        "3rd content",
    ],
];

const NuclearPhyscis: Array<Array<any>> = [
    ["separator", "Formulae"],
    [`Formula`, "Description", "external"],
    ["formulae", "description", "difficulty"],
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
                <img src="./src/images/bulb.png" alt="" />
                <MUIaccordion
                    content={[
                        "Physics Laws",
                        Laws.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />

                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "General Physics",
                        GeneralPhysics.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Energetics",
                        Energetics.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Thermal Physics",
                        Heat.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Waves and Light",
                        WavesLight.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />

                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Electricity and Magnetism",
                        ElectricityMagnetism.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Nuclear Physics ☢",
                        NuclearPhyscis.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
            </MathJaxContext>
        </div>
    );
}

export default FormulaePhysics;
