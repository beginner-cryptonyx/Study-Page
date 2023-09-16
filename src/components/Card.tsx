import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

interface Props {
    header: string;
    content?: string;
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
            className="rounded-3xl bg-black w-[90vw] md:max-w-[25vw] mx-2 my-1 duration-[300ms] mb-7 hover:scale-125 shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] flex flex-col"
            onClick={handleClickCard}
        >
            <div className="bg-[#222222] py-1 text-[25pt] text-center rounded-t-md h-[calc(100%/5)] flex items-center justify-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-green-500 animate-text_down font-bold">
                    {header}
                </div>
            </div>
            <div className="w-[100%] bg-[#3f3f3f] rounded-b pb-3.5 h-[calc((100%/5)*4)]">
                <div className="pt-3 text-[19pt] flex justify-center text-center min-h-fit">
                    {content}
                </div>

                <div className="button flex flex-row mx-auto justify-center flex-wrap align-middle pt-4">
                    {tags.map((item, index) => (
                        <div
                            className="button flex justify-center items-center text-[14pt] m-2 rounded-lg  hover:scale-[110%] duration-100"
                            key={parseInt(SHA256(item[0]).toString(), 16)}
                            onClick={(e) => handleClickTag(index)}
                        >
                            <div className="button tag-btn-bg flex justify-center items-center bg-black text-white rounded-lg cursor-pointer p-[0.2rem] animate-gradient_slide_right">
                                <div className="button bg-black hover:bg-gradient-to-l from-[#161616] via-black to-[#161616] p-1.5 rounded-lg animate-gradient_slide_left text-center">
                                    {item[0]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
