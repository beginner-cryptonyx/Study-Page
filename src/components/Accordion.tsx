import {useState} from "react"

export interface AccordionProps {
    title: string;
    content: any;
}

function Accordion({ title, content }: AccordionProps) {
    return (
        <>
            <div className="accordion_title w-[70vw] text-4xl font-semibold text-center mx-auto py-2 animate-gradient_slide rounded-t-md">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-green-500 animate-text_down">
                    {title}
                </span>
            </div>
            <div className="content">
                <h1>content</h1>
                <h1>content</h1>
                <h1>content</h1>
                <h1>content</h1>
                <h1>content</h1>
            </div>
        </>
    );
}

export default Accordion;
export { Accordion };
