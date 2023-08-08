interface PointProps {
    points: Array<any>;
}

export default function Point({ points }: PointProps) {
    return (
        <>
            <div className="bg-transparent flex flex-col justify-center align-middle">
                {points.map((point, index) =>
                    typeof point[1] !== "undefined" &&
                    Array.isArray(point[1]) ? (
                        <span
                            className={`text-center mx-auto ${point[1].join(
                                " "
                            )}`}
                            key={index}
                        ></span>
                    ) : (
                        <span className="text-center mx-auto" key={index}>
                            {point}
                        </span>
                    )
                )}
            </div>
        </>
    );
}
