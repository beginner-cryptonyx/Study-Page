import { MultiCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Formulae: Array<Array<any>> = [
    [`formulae`, "description", "normal", 1, 'jax', '3rd content']
]

function FormulaePhysics() {
    return(
        <MathJaxContext>
            <div className="separator">‎</div>
                <MUIaccordion
                    content={[
                        "Testing for Ions",
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
        </MathJaxContext>
    )
}

export default FormulaePhysics;
