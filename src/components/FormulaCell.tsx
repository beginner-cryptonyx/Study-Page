interface Props {
    formula: string;
    description: string;
    importance?: string;
}

function Cell(props: Props) {
    return (
        <div className="flex flex-row w-[70vw] mx-auto text-center">
            <div className="w-1/2 bg-gradient-to-r">{props.formula}</div>
            <div className="w-1/2 bg-gradient-to-l">{props.description}</div>
        </div>
    );
}

export default Cell;
