import { render } from "react-dom";
import { MultiCell, MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJaxContext } from "better-react-mathjax";

const ReactivitySeries: Array<Array<any>> = [
    [`Potassium`, "", "normal", 1],
    [`Sodium`, "", "normal", 1],
    [`Lithium`, "", "normal", 1],
    [`Calcium`, "", "normal", 1],
    [`Magnesium`, "", "normal", 1],
    [`Aluminum`, "", "normal", 1],
    [`element`, <MultiCell
    formula="carbon"
    description=""
    importance="important"
    columns={1}
    jax={false}
></MultiCell>, "normal", 1],
    [`Zinc`, "", "normal", 1],
    [`Iron`, "", "normal", 1],
    [`element`, <MultiCell
    formula="hydrogen"
    description=""
    importance="important"
    columns={1}
    jax={false}
></MultiCell>, "normal", 1],
    [`Copper`, "", "normal", 1],
    [`Silver`, "", "normal", 1],
    [`Gold`, "", "normal", 1],
    [`Platinum`, "", "normal", 1],
    [``, "", "normal", ""],
];

function FormulaeChemistry() {
    return (
        <MUIaccordion
            content={[
                "The Reactivity Series",
                ReactivitySeries.map((element_data, index) =>
                    element_data[0] === "separator" ? (
                        <CellSeparator title={element_data[0]} />
                    ) : (element_data[0] === "element" ? (
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
                    ))
                ),
            ]}
        />
    );
}

export default FormulaeChemistry;
