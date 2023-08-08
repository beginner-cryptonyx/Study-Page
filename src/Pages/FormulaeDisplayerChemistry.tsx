import { MultiCell, CellSeparator } from "../components/FormulaCell";
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

const ReactivitySeries: Array<Array<any>> = [
    [`Potassium`, "", "normal"],
    [`Sodium`, "", "normal"],
    [`Lithium`, "", "normal"],
    [`Calcium`, "", "normal"],
    [`Magnesium`, "", "normal"],
    [`Aluminum`, "", "normal"],
    [
        `element`,
        <MultiCell
            formula="carbon"
            description=""
            importance="important"
            columns={1}
            jax={false}
        ></MultiCell>,
        "normal",
    ],
    [`Zinc`, "", "normal"],
    [`Iron`, "", "normal"],
    [
        `element`,
        <MultiCell
            formula="hydrogen"
            description=""
            importance="important"
            columns={1}
            jax={false}
        ></MultiCell>,
        "normal",
    ],
    [`Copper`, "", "normal"],
    [`Silver`, "", "normal"],
    [`Gold`, "", "normal"],
    [`Platinum`, "", "normal"],
];

const Formulae: Array<Array<any>> = [
    [
        `\\frac{\\text{moles}}{\\text{mass of 1 mole}}`,
        "Finding the number of moles",
        "normal",
        "true",
    ],
    [
        `mass of 1 mole = Mr or Ar`,
        "Very important formula of finding the how much mass one mole has",
        "normal",
    ],
    [
        `volume of gas at rtp = 24dm³ * number of moles`,
        "volumes of gas for any amount of moles",
        "normal",
    ],
    [
        `number of moles in x volume = volume/24dm³`,
        "no need to learn this formulas if the above formula is learnt",
        "normal",
    ],
    [
        `concentration = amount(mol/g) / volume`,
        "concentration formula",
        "normal",
    ],
    [
        `multiplier = Mr / empirical mass molecular formula = multiplier * empirical formula`,
        "finding the molecular formula from empirical mass",
        "normal",
    ],
    [
        `%yield = mass of product / theoretical mass`,
        "finding the percentage yield",
        "normal",
    ],
    [
        `%purity = pure mass / impure mass`,
        "finding the percentage purity",
        "normal",
    ],
    [
        `enthalpy (∆H) = bond break energy - bond making energy`,
        "enthalpy, the total energy change during a reaction",
        "normal",
    ],
    [
        `(Retention Factor) Rf = distance from origin to dot / distance from origin to solvent front`,
        "retention factor, using a table can tell you what element/compound you will deal with",
        "normal",
    ],
];

const SolubilityRules: Array<Array<any>> = [
    [`Soluble`, <p className="text-3xl">Insoluble</p>, "external"],
    [`Sodium Salts`, <p className="text-3xl">No Exceptions</p>, "normal"],
    [`Potassium Salts`, <p className="text-3xl">No Exceptions</p>, "normal"],
    [`Ammonium Salts`, <p className="text-3xl">No Exceptions</p>, "normal"],
    [
        `Halides`,
        <p className="text-3xl">Except halides of silver and lead</p>,
        "normal",
    ],
    [
        `Sulfates`,
        <p className="text-3xl">Except: Calcium Barium Lead sulfate</p>,
        "normal",
    ],
    [
        `Except:
        Sodium
        Potassium
    Ammonium`,
        <p className="text-3xl">Carbonates</p>,
        "normal",
    ],
];

const Acids: Array<Array<any>> = [
    [
        `separator`,
        <p className="flex justify-center align-middle">
            <span className="text-red-600 mx-1.5">Acid</span>
            or
            <span className="text-blue-900 mx-1.5">Base</span>
        </p>,
    ],
    [`Compound / Ion`, "Acid or base", "external", ""],
    [
        `Metal Oxide`,
        <p className="text-3xl">Base (except aluminum oxide and zinc oxide)</p>,
        "normal",
        "",
    ],
    [`Non Metal Oxide`, <p className="text-3xl">Acid</p>, "normal", ""],
    [`Hydroxide`, <p className="text-3xl">Base</p>, "normal", ""],
    [`Carbonate`, <p className="text-3xl">Base</p>, "normal", ""],
    [`Metal Oxide`, <p className="text-3xl">Insoluble</p>, "normal", ""],
    [`Metal Oxide`, <p className="text-3xl">Insoluble</p>, "normal", ""],
    [`Metal Oxide`, <p className="text-3xl">Insoluble</p>, "normal", ""],
    [`Metal Oxide`, <p className="text-3xl">Insoluble</p>, "normal", ""],

    ["separator", "Acid Reaction"],
    [`Acid + Metal → Salt + Hydrogen`, "", "normal", ""],
    [`Acid + Base → Salt + Water`, "", "normal", ""],
    [`Acid + Carbonate → Salt + Carbon Dioxide + Water`, "", "normal", ""],
    [`Ammonia + Acid → Ammonium Salt`, "", "normal", ""],
];
function FormulaeChemistry() {
    return (
        <MathJaxContext config={mathJaxConfig} version={3}>
            <MUIaccordion
                content={[
                    "The Reactivity Series",
                    ReactivitySeries.map((element_data, index) =>
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
                                key={index}
                            ></MultiCell>
                        )
                    ),
                ]}
            />
            <div className="separator">‎</div>

            <MUIaccordion
                content={[
                    "Formulae",
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
                                jax={element_data[3] ? true : false}
                                key={index}
                            ></MultiCell>
                        )
                    ),
                ]}
            />
            <div className="separator">‎</div>

            <MUIaccordion
                content={[
                    "Solubility Rules",
                    SolubilityRules.map((element_data, index) =>
                        element_data[0] === "separator" ? (
                            <CellSeparator title={element_data[1]} />
                        ) : element_data[0] === "element" ? (
                            element_data[1]
                        ) : (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                jax={element_data[3] ? true : false}
                                key={index}
                            ></MultiCell>
                        )
                    ),
                ]}
            />

            <div className="separator">‎</div>

            <MUIaccordion
                content={[
                    "Acids and their Reactions",
                    Acids.map((element_data, index) =>
                        element_data[0] === "separator" ? (
                            <CellSeparator title={element_data[1]} />
                        ) : element_data[0] === "element" ? (
                            element_data[1]
                        ) : (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                jax={element_data[3] ? true : false}
                                key={index}
                            ></MultiCell>
                        )
                    ),
                ]}
            />
        </MathJaxContext>
    );
}

export default FormulaeChemistry;
