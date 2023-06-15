interface Props {
    header: string;
    content: string;
    tags: Array<string>;
}

function Card({ header, content, tags }: Props) {
    return (
        <>
            <div className="rounded-md bg-[#666666] max-w-[25vw] mx-2 my-1 duration-[300ms] hover:scale-125">
                <div className="bg-black text-white text-[20pt] text-center rounded-t-md">
                    {header}
                </div>
                <div className="w-[100%]">
                    <div className="mt-5 text-lg flex justify-center mb-2">
                        {content}
                    </div>
                    <div className="flex flex-row mx-auto justify-center ">
                        {tags.map((item) => (
                            <div className="px-0.5 mx-1 bg-accent#2 rounded-md min-w-[20%] mb-2 cursor-pointer hue-rotate-30  text-center hover:brightness-90 active:brightness-75 ">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
