import { MathCell, CellSeparator } from "../components/FormulaCell";
import Accordion from "../components/Accordion";
import MUIaccordion from "../components/MuiAccordion";

function FormulaeMath() {
    return (
        <>
            <div className="mt-4"></div>
            {/* <Accordion
                title="Algebraic Identities and Law's of indices"
                content=""
            /> */}

            <MUIaccordion content={["l", "p"]}/>
        </>
    );
}

export default FormulaeMath;
