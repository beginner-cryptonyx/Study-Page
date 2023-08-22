import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

interface Props {
    header: string;
    content: string;
    tags: Array<Array<any>>;
    redirect?: [boolean, string];
}

function Card({ header, content, tags, redirect }: Props) {
    const navigate = useNavigate();

    const handleClickCard = () => {
        if (typeof redirect != "undefined") {
            redirect[0] ? navigate(redirect[1]) : console.log("tried");
        }
    };

    const handleClickTag = (index: number) => {
        if (typeof tags[index][1] != "undefined") {
            switch (tags[index][2]) {
                case "true":
                    // const link = document.createElement("a");
                    // link.href = tags[index][1];
                    // link.setAttribute("download", tags[index][1]);
                    // link.click();
                    saveAs(
                        tags[index][1],
                        tags[index][1].substring(
                            tags[index][1].lastIndexOf("/") + 1,
                            tags[index][1].lastIndexOf(".pdf")
                        )
                    );
                    break;

                case "false":
                    navigate(tags[index][1]);
            }
        }
    };

    return (
        <div
            className="rounded-md bg-[#505050] w-[90vw] md:max-w-[25vw] mx-2 my-1 duration-[300ms] mb-7 hover:scale-125"
            onClick={handleClickCard}
        >
            <div className="bg-black py-1 text-[25pt] text-center rounded-t-md ">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-green-500 animate-text_down font-bold">
                    {header}
                </div>
            </div>
            <div className="w-[100%]">
                <div className="mt-3 text-[17pt] flex justify-center mb-3.5">
                    {content}
                </div>
                <div className="flex flex-row mx-auto justify-center flex-wrap align-middle h-[100%] pt-1">
                    {tags.map((item, index) => (
                        <div
                            className="text-[14pt] mx-1 bg-gradient-to-bl from-blue-400 py-1 px-1.5 to-purple-500 rounded-md min-w-[20%] mb-6 cursor-pointer  text-center hover:brightness-90 active:brightness-75 animate-gradient_slide flex align-middle justify-center "
                            key={parseInt(SHA256(item[0]).toString(), 16)}
                            onClick={(e) => handleClickTag(index)}
                        >
                            {item[0]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
