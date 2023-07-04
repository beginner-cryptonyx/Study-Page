import { MathCell, CellSeparator } from "../components/FormulaCell";
import MUIaccordion from "../components/MuiAccordion";

const AlgebraicMathFormulae: Array<Array<any>> = [
    [
        `<math>
    <mrow>
      <mo>(</mo>
      <mi>a</mi>
      <mo>+</mo>
      <mi>b</mi>
      <msup>
        <mo>)</mo>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <msup>
        <mi>a</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <msup>
        <mi>b</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>

        <mi>b</mi>
      </mrow>
    </mrow>
  </math>`,
        "",
    ],
    [
        `<math>
    <mrow>
      <mo>(</mo>
      <mi>a</mi>
      <mo>-</mo>
      <mi>b</mi>
      <msup>
        <mo>)</mo>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <msup>
        <mi>a</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <msup>
        <mi>b</mi>
        <mn>2</mn>
      </msup>
      <mo>-</mo>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
        <mi>b</mi>
      </mrow>
    </mrow>
  </math>`,
        "",
    ],
];

function FormulaeMath() {
    return (
        <>
            <div className="mt-4"></div>
            {/* <Accordion
                title="Algebraic Identities and Law's of indices"
                content=""
            /> */}

            <MUIaccordion
                content={[
                    "Algebraic Identities and Law's of indices",
                    AlgebraicMathFormulae.map((formula_holder, index) => (
                        <MathCell
                            formula={formula_holder[0]}
                            description="Theory of Relativity"
                            importance="important"
                            key={index}
                        />
                    )),
                ]}
            />
        </>
    );
}

export default FormulaeMath;
