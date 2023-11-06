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
                case "download":
                    saveAs(
                        tags[index][1],
                        tags[index][1].substring(
                            tags[index][1].lastIndexOf("/") + 1,
                            tags[index][1].lastIndexOf(".pdf")
                        )
                    );
                    break;

                case "redirect":
                    window.location.href = tags[index][1]
                    break;

                case "false":
                    navigate(tags[index][1]);
                    break;
            }
        }
    };

    return (
        <section
            className="rounded-3xl bg-black w-[90vw] md:w-[93.5%] mx-2 my-1 duration-[300ms] mb-7 hover:scale-110 shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] flex flex-col h-[90%]"
            onClick={handleClickCard}
        >
            <div className="bg-[#222222] py-1 text-[25pt] text-center rounded-t-md h-[7.5vh] flex items-center justify-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-green-500 animate-text_down font-bold">
                    {header}
                </div>
            </div>
            <div className="w-[100%] bg-[#3f3f3f] rounded-b pb-3.5 h-[100%]">
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
        </section>
    );
}

export default Card;
