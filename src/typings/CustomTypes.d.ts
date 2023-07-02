interface MathCell{
    formula: string;
    description: string;
    importance?: string;
}

interface CellSeparator{
    title: string;
}

interface Accordion {
    title: string;
    content: any;
}

export {
    MathCell,
    CellSeparator,
    Accordion,
}