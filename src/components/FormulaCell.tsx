interface Props {
    formula: string;
    description: string;
    f_width?: any;
    d_width?: any;
}

function Cell(props: Props) {
    return (
        <div className="flex flex-row w-[70vw] mx-auto">
            <div className="w-1/2">{props.formula}</div>
            <div className="w-1/2">{props.description}</div>
        </div>
    );
}

export default Cell;
