import { render } from "react-dom";
import { MultiCell, MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJaxContext } from "better-react-mathjax";

const ReactivitySeries: Array<Array<any>> = [
    [`Potassium`, "", "normal", ],
    [`Sodium`, "", "normal", ],
    [`Lithium`, "", "normal", ],
    [`Calcium`, "", "normal", ],
    [`Magnesium`, "", "normal", ],
    [`Aluminum`, "", "normal", ],
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
    [`Zinc`, "", "normal", ],
    [`Iron`, "", "normal", ],
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
    [`Copper`, "", "normal", ],
    [`Silver`, "", "normal", ],
    [`Gold`, "", "normal", ],
    [`Platinum`, "", "normal", ],
    [``, "", "normal", ""],
];

const Formulae: Array<Array<any>> = [
    [
        `\\frac{\\text{moles}}{\\text{mass of 1 mole}}`,
        "Finding the number of moles",
        "normal",
       
        true,
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
    [`volume = amount / concentration`, "", "normal", 2],
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
    [``, "", "normal",],
    [``, "", "normal",],
    [``, "", "normal",],
    [``, "", "normal",],
    [``, "", "normal",],
    [``, "", "normal",],
    [``, "", "normal",],
    [``, "", "normal",],
];
function FormulaeChemistry() {
    return (
        <MathJaxContext>
            <MUIaccordion
                content={[
                    "The Reactivity Series",
                    ReactivitySeries.map((element_data, index) =>
                        element_data[0] === "separator" ? (
                            <CellSeparator title={element_data[0]} />
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
                            <CellSeparator title={element_data[0]} />
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
