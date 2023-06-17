import { SHA256 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';

interface Props {
    header: string;
    content: string;
    tags: Array<Array<string>>;
}

function Card({ header, content, tags }: Props) {
    const navigate = useNavigate();

    const handleClickCard = () => {
        navigate("/formulae")
    };

    return (
        <div className="rounded-md bg-[#505050] max-w-[25vw] mx-2 my-1 duration-[300ms] hover:scale-125" onClick={handleClickCard}>
            <div className="bg-black py-1 text-[25pt] text-center rounded-t-md ">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-green-500 animate-text_down font-bold">
                    {header}
                </div>
            </div>
            <div className="w-[100%]">
                <div className="mt-3 text-[17pt] flex justify-center mb-2">
                    {content}
                </div>
                <div className="flex flex-row mx-auto justify-center">
                    {tags.map((item) => (
                        <div
                            className="px-0.5 text-[14pt] mx-1 bg-gradient-to-bl from-blue-400 to-purple-500 rounded-md min-w-[20%] mb-6    cursor-pointer  text-center hover:brightness-90 active:brightness-75 animate-gradient_slide"
                            key={parseInt(SHA256(item[0]).toString(), 16)}
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
