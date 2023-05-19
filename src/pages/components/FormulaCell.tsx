// {formula: String, description: String, formula_width: Number = 40, description_width: Number = 60}

interface Props {
    formula: String;
    description: String;
    formula_width?: Number;
    description_width?: Number;
}

function DoubleCell(props: Props) {
    return (
        <div className="DoubleCell flex w-2/3 mx-auto">
            <div
                className={`formula text-center ${
                    props.formula_width ? props.formula_width : "w-1/2"
                }`}
            >
                {props.formula}
            </div>

            <div
                className={`desc text-center ${
                    props.description_width ? props.description_width : "w-1/2"
                }`}
            >
                {props.description}
            </div>
        </div>
    );
}

export default DoubleCell;
