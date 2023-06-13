interface Props {
    formula: string;
    description: string;
    importance?: string;
}

function Cell({ formula , description , importance }: Props) {
    let color: string = "";

    switch (importance) {
        case "normal":
            color = "fs_green";
            break;

        case "important":
            color = "fs_red";
            break;

        case "external":
            color = "fs_grey";
    }
    return (
        <div className="flex flex-row w-[70vw] mx-auto text-center">
            <div className={`w-1/2 bg-gradient-to-r `}>{formula}</div>
            <div className={`w-1/2 bg-gradient-to-l`}>{description}</div>
        </div>
    );
}

export default Cell;
