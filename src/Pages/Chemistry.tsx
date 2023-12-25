import { MultiCell } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Point from "../components/Point";

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
    ["Carbon", "", "important"],
    [`Zinc`, "", "normal"],
    [`Iron`, "", "normal"],
    [`Hydrogen`, "", "important"],
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
    [`Soluble`, <p className="text-xl md:text-2xl">Insoluble</p>, "external"],
    [
        `Sodium Salts`,
        <p className="text-xl md:text-2xl">No Exceptions</p>,
        "normal",
    ],
    [
        `Potassium Salts`,
        <p className="text-xl md:text-2xl">No Exceptions</p>,
        "normal",
    ],
    [
        `Ammonium Salts`,
        <p className="text-xl md:text-2xl">No Exceptions</p>,
        "normal",
    ],
    [
        `Halides`,
        <p className="text-xl md:text-2xl">
            Except halides of silver and lead
        </p>,
        "normal",
    ],
    [
        `Sulfates`,
        <p className="text-xl md:text-2xl">
            Except: Calcium Barium Lead sulfate
        </p>,
        "normal",
    ],
    [
        `Except:
        Sodium
        Potassium
    Ammonium`,
        <p className="text-xl md:text-2xl">Carbonates</p>,
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
    [`Metal Oxide`, "Base", "normal", ""],
    [`Non Metal Oxide`, "Acid", "normal", ""],
    [`Hydroxide`, "Base", "normal", ""],
    [`Carbonate`, "Base", "normal", ""],

    ["separator", "Acid Reactions"],
    [`Acid + Metal → Salt + Hydrogen`, "", "normal", ""],
    [`Acid + Base → Salt + Water`, "", "normal", ""],
    [`Acid + Carbonate → Salt + Carbon Dioxide + Water`, "", "normal", ""],
    [`Ammonia + Acid → Ammonium Salt`, "", "normal", ""],

    ["separator", "Indicator color"],
    [
        `Indicator`,
        <p className="text-blue-900">Base</p>,
        "external",
        "",
        3,
        <p className="text-red-600">Acid</p>,
    ],
    [
        `Litmus`,
        <p className="text-blue-900">Blue</p>,
        "normal",
        "",
        3,
        <p className="text-red-600">Red</p>,
    ],
    [
        `Methyl Orange`,
        <p className="text-yellow-400">Yellow</p>,
        "normal",
        "",
        3,
        <p className="text-red-600">Red</p>,
    ],
    [
        `Thymolphthalein`,
        <p className="text-blue-900">Blue</p>,
        "important",
        "",
        3,
        <p className="text-white">Colourless</p>,
    ],
    [
        `Phenolphthalein`,
        <p className="text-pink-700">Pink</p>,
        "normal",
        "",
        3,
        <p className="text-white">Colourless</p>,
    ],
];

const OrganicChemistry: Array<Array<any>> = [
    [`separator`, "General formulae", "normal"],
    [`C_nH_{2n + 2}`, "Alkanes", "normal", "", "true"],
    [`C_nH_{2n}`, "Alkenes", "normal", "", "true"],
    [`C_nH_{2n-2}`, "Alkynes", "external", "", "true"],
    [`C_nH_{2n+1}`, "Substituent / Alkyle", "normal", "", "true"],

    [`separator`, "Hydrocarbon Fractions and their Properties", "normal"],
    [`Fraction Name`, "Carbon chain length", "external", 3, "", "Uses"],

    [`Refinery Gas`, "1 - 4", "normal", 3, "", "Gas for heating and cooking"],
    [`Gasoline (petrol)`, "5 - 6", "normal", 3, "", "Fuel for cars"],
    [
        `Naphtha`,
        "6 - 10",
        "normal",
        3,
        "",
        "Feedstock for chemicals and plastics",
    ],
    [
        `Kerosene`,
        "10 - 15",
        "normal",
        3,
        "",
        "Fuel for aircrafts, stoves, and lamps",
    ],
    [`Diesel oil`, "15 - 20", "normal", 3, "", "Fuel for diesel engines"],
    [
        `Fuel oil`,
        "20 - 30",
        "normal",
        3,
        "",
        "Fuel for power stations and ships",
    ],
    [
        `Lubricating fraction`,
        "30 - 50",
        "normal",
        3,
        "",
        <Point points={["Engine oil", "Waxes", "Polishes"]}></Point>,
    ],
    [
        `Bitumen`,
        "50+",
        "normal",
        3,
        "",
        <Point points={["Roofs", "Road Surfaces (tar)"]}></Point>,
    ],

    // [`separator`, "Organic Chemistry Reactions", "normal"],
    // [
    //     `Catalytic Cracking`,
    //     <Point
    //         points={["Zeolite is the Catalyst", "", "Produces alkenes"]}
    //     ></Point>,
    //     "normal",
    //     3,
    //     "",
    //     <Point points={["540 Degrees C", "", "Catalyst (zeolite)"]}></Point>,
    // ],
    // [
    //     `Ethene to Ethane`,
    //     <Point
    //         points={["Zeolite is the Catalyst", "", "Produces alkenes"]}
    //     ></Point>,
    //     "normal",
    //     3,
    //     "",
    //     <Point points={["540 Degrees C", "", "Catalyst (zeolite)"]}></Point>,
    // ],
];

const DecompositionRules: Array<Array<any>> = [
    [`separator`, "Carbonates", "normal", "", "", ""],
    [
        `Reactive metals like potassium and sodium will not decompose`,
        "",
        "normal",
        "",
        "",
        "",
    ],
    [
        `Most metal carbonates decompose to form carbon dioxide and a metal oxide`,
        "",
        "normal",
        "",
        "",
        "",
    ],
    [
        `Very underactive metals like silver and platinum form their respective metals along with carbon dioxide and oxygen`,
        "",
        "normal",
        "",
        "",
        "",
    ],

    [`separator`, "Nitrate", "normal", "", "", ""],
    [
        `Reactive metals like potassium and sodium will form their metal nitrite and oxygen`,
        "",
        "normal",
        "",
        "",
        "",
    ],
    [
        `Most metal Nitrates decompose to form their metal oxide, nitrogen dioxide and oxygen`,
        "",
        "normal",
        "",
        "",
        "",
    ],
    [
        `Very underactive metals like silver and platinum form their respective metals along with nitrogen dioxide and oxygen`,
        "",
        "normal",
        "",
        "",
        "",
    ],
    [
        `Ammonium nitrate forms nitrous oxide (N2O) and water`,
        "",
        "external",
        "",
        "",
        "",
    ],
    [`separator`, "Sulphate", "normal", "", "", ""],
    [`Metals in group 1 or 2 will not decompose `, "", "normal", "", "", ""],
    [
        `Sulphate of heavy metals decompose to make a metal oxide and sulfur trioxide`,
        "",
        "normal",
        "",
        "",
        "",
    ],
    [
        `Exceptions include: (ammonium sulfate which forms ammonia and sulfuric acid) and (Iron || sulfate which forms iron ||| oxide, sulfur trioxide and sulfur dioxide)`,
        "",
        "normal",
        "",
        "",
        "",
    ],
];

const GroupTrends: Array<Array<any>> = [
    [`separator`, "Group 1", "normal", "", "", ""],
    [`Reactivity`, "Increases with group number", "normal", "", "", ""],
    [
        `Boiling/Melting point`,
        "Decreases with group number",
        "normal",
        "",
        "",
        "",
    ],
    [`Density`, "Increases with group number", "normal", "", "", ""],

    [`separator`, "Group 7", "normal", "", "", ""],
    [`Reactivity`, "Decreases with group number", "normal", "", "", ""],
    [
        `Boiling/Melting point`,
        "Increases with group number",
        "normal",
        "",
        "",
        "",
    ],
    [`Density`, "Increases with group number", "normal", "", "", ""],
];
const PracticalChemistryTesting: Array<Array<any>> = [
    [`separator`, "Cation Tests"],
    [
        `Ammonium`,
        <Point
            points={[
                "Add - dil. NaOH (aq)",
                "",
                "Heat Gently",
                "Ammonia Released ( Turns damp Blue Litmus to red )",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],

    [
        `Iron (||)`,
        <Point
            points={[
                "Add - dil • Ammonia (aq) to one portion",
                "",
                "Add - dil • NaOH (aq) to the other potion",
                "Pale Green Precipitate will form",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `Iron (|||)`,
        <Point
            points={[
                "Divide into 2 portions",
                "",
                "Add - dil • Ammonia (aq) to one portion",
                "Add - dil • NaOH (aq) to the other potion",
                "",
                "Reddish Brown Precipitate will form",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `Zinc`,
        <Point
            points={[
                "Divide into 2 portions",
                "",
                "Add - dil • NaOH (aq) to one portion",
                "Add - dil • Ammonia (aq) to the other potion",
                "",
                "White Precipitate forms",
                "Adding more makes solution colourless",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `Aluminum`,
        <Point
            points={[
                "Divide into 2 portions",
                "",
                "Add - dil • NaOH (aq) to one portion",
                "White Precipitate forms",
                "Adding more makes it colourless",
                "",
                "Add - dil • Ammonia (aq) to the other portion",
                "White Precipitate forms",
                "Adding more has no effect",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `Calcium`,
        <Point
            points={[
                "Divide into 2 portions",
                "",
                "Add - dil • NaOH (aq) to one portion",
                "White Precipitate forms",
                "Adding more has no effect",
                "",
                "Add - dil • Ammonia (aq) to the other portion",
                "No Precipitate, or very slight white precipitate is formed",
                "Adding more has no effect",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],

    ["separator", "Anion Test"],
    [
        `Halide`,
        <Point
            points={[
                "To a small amount of solution, add an equal volume of dilute nitric acid",
                "",
                "Add aqueous silver nitrate, which is insoluble",

                "",
                "If halide is present, precipitate forms",
                "Chlorine is white",
                "Bromine is Creme",
                "Iodine is Pale-Yellow",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `\\text{Sulphate} (SO_4^{2-})`,
        <Point
            points={[
                "To a small amount of solution, add an equal volume of dilute nitric acid",
                "",
                "Add barium nitrate solution, which is insoluble",
                "",
                <MathJax>
                    {"$SO_4^{2-} + Ba^{2+} \\rightarrow BaSO_4$"}
                </MathJax>,
            ]}
        ></Point>,
        "normal",
        "columns",
        "true",
        "thirdcontent",
    ],
    [
        `Sulfite`,
        <Point
            points={[
                "To a small amount of solution, add an equal volume of dilute acidified potassium permanganate (purple)",
                "",
                "Solution turns colourless",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `Carbonate`,
        <Point
            points={[
                "To a small amount of solution, add an equal volume of dilute Hydrochloric acid",
                "",
                "A gas will be produced (Carbon Dioxide)",
                "",
                "It turns limewater milky",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],
    [
        `Nitrate`,
        <Point
            points={[
                "To a small amount of solution (or solid), add little aqueous Sodium Hydroxide",
                "",
                "Add small pieces of Aluminum foil",
                "Heat Gently",
                "",
                "A gas is given off (Ammonia)",
                "",
                <p>
                    Expose this gas with{" "}
                    <span className="text-red-500 font-semibold inline">
                        Damp
                    </span>{" "}
                    red litmus paper
                </p>,
                "Paper turns blue",
            ]}
        ></Point>,
        "normal",
        "columns",
        "",
        "thirdcontent",
    ],

    ["separator", "Gas Tests"],
    [
        `Ammonia`,
        <Point
            points={[
                "Heat",
                "",
                "Hold Damp Red Litmus Paper over it",
                "",
                "Paper Turns Blue",
            ]}
        ></Point>,
        "normal",
        3,
        "",
        <Point
            points={[
                "Colourless",
                "",
                "Alkaline Gas",
                "",
                "Strong Sharp Smell",
            ]}
        ></Point>,
    ],
    [
        `Hydrogen`,
        <Point
            points={[
                "Collect in a Tube",
                "",
                "Hold a lighted splint to it",
                "",
                "",
                "Squeaky Pop is heard",
            ]}
        ></Point>,
        "normal",
        3,
        "",
        <Point
            points={[
                "Colourless",
                "",
                "When Lit, Reacts Vigorously with Oxygen",
            ]}
        ></Point>,
    ],
    [
        `Oxygen`,
        <Point
            points={[
                "Collect Oxygen",
                "",
                "Hold glowing splint to it",
                "",
                "",
                "Splint Immediately bursts into flame",
            ]}
        ></Point>,
        "normal",
        3,
        "",
        <Point points={["Colourless", "", "Fuel Burns Easier in it"]}></Point>,
    ],
    [
        `Chlorine`,
        <Point
            points={[
                "Hold Damp Litmus Paper in a fume cupboard",
                "",
                "Paper turns white",
            ]}
        ></Point>,
        "normal",
        3,
        "",
        <Point points={["Poisonous", "", "Can Bleach Dyes"]}></Point>,
    ],
    [
        `Sulfur Dioxide`,
        <Point
            points={[
                "Get solution of Potassium Manganate(VII)",
                "",
                "Add a Little amount of dilute Hydrochloric Acid",
                "",
                "Soak A piece of filter paper in the now acidified Potassium Manganate(VII)",
                "",
                "Place filter paper in the gas (S02)",
                "",
                "Paper becomes colourless from purple",
            ]}
        ></Point>,
        "normal",
        3,
        "",
        <Point
            points={[
                "Poisonous",
                "",
                "Colourless",
                "",
                "Acidic gas",
                "",
                "Chocking smell",
            ]}
        ></Point>,
    ],

    ["separator", "Cation Flame Test"],
    [`Lithium`, "Red", "normal", 2, ""],
    [`Sodium`, "Yellow", "normal", 2, ""],
    [`Potassium`, "Lilac", "normal", 2, ""],
    [`Calcium`, "Orange-Red", "normal", 2, ""],
    [`Barium`, "Light Green", "normal", 2, ""],
    [`Copper (II)`, "Blue-Green", "normal", 2, ""],
];

const EquilibriumAndRate: Array<Array<any>> = [
    ["separator", "Processes and their Conditions"],
    [`Process`, "Catalyst & Product", "external", 3, "", "Conditions"],
    [
        `Haber's Process`,
        <Point
            points={["Iron (Fe) is Catalyst", "", "Ammonia is produced"]}
        ></Point>,
        "normal",
        3,
        "",
        <Point points={["450 Degrees C", "", "200 Atmospheres"]}></Point>,
    ],
    [
        `Contact Process`,
        <Point
            points={[
                "Vanadium PentOxide is the Catalyst",
                "",
                "Produces Sulfuric Acid",
            ]}
        ></Point>,
        "normal",
        3,
        "",
        <Point points={["450 Degrees C", "", "2 Atmospheres"]}></Point>,
    ],
    [
        `Catalytic Cracking`,
        <Point
            points={["Zeolite is the Catalyst", "", "Produces alkenes"]}
        ></Point>,
        "normal",
        3,
        "",
        <Point points={["540 Degrees C", "", "Catalyst (zeolite)"]}></Point>,
    ],

    ["separator", "Factors affecting Reversible Reactions"],
    ["Factor", "Favours", "external", 2],
    [`Temperature`, "Endothermic Reaction", "normal", 2, ""],
    [`Pressure`, "Side with lowest amount of molecules", "normal", 2, ""],
    [`Concentration`, "Side with more concentration", "normal", 2, ""],
    [`Catalyst`, "Both forward and reverse", "normal", 2, ""],

    ["separator", "Increasing Rate of reaction"],
    [`Increasing Temperature`],
    [`Increasing Surface Area`],
    [`Increasing Concentration`],
    [`Introducing a Catalyst`],
];

function FormulaeChemistry() {
    return (
        <div className="container">
            <div className="pt-5"></div>
            <MathJaxContext config={mathJaxConfig} version={3}>
                <MUIaccordion
                    content={[
                        "The Reactivity Series",
                        ReactivitySeries.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[3]}
                                jax={element_data[4] ? true : false}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Formulae",
                        Formulae.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                jax={element_data[3] ? true : false}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Group Trends",
                        GroupTrends.map((element_data, index) => (
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
                        "Solubility Rules",
                        SolubilityRules.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                jax={element_data[3] ? true : false}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Acids and Bases",
                        Acids.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                columns={element_data[4]}
                                jax={element_data[3] ? true : false}
                                third_content={element_data[5]}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Testing for Ions",
                        PracticalChemistryTesting.map((element_data, index) => (
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
                        "Equilibrium, Rate of Reaction and Processes",
                        EquilibriumAndRate.map((element_data, index) => (
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
                        "Decomposition Rules",
                        DecompositionRules.map((element_data, index) => (
                            <MultiCell
                                formula={element_data[0]}
                                description={element_data[1]}
                                importance={element_data[2]}
                                jax={element_data[3] ? true : false}
                                key={index}
                            ></MultiCell>
                        )),
                    ]}
                />
                <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Organic Chemistry {work in progress}",
                        OrganicChemistry.map((element_data, index) => (
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

export default FormulaeChemistry;
