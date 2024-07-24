const StyledText = ({
    text,
    annotations,
    style,
}: {
    text: string;
    annotations: Record<string, string | boolean>;
    style: any;
}) => {
    const classNameArr: string[] = [];

    for (const key in annotations) {
        if (annotations[key] === true) {
            classNameArr.push(style.annotations[key as keyof typeof annotations]);
        }

        if (annotations.color !== "default" && key === "color") {
            classNameArr.push(style.annotations[annotations.color as keyof typeof annotations]);
        }
    }

    return <>{classNameArr.length > 0 ? <span className={classNameArr.join(" ")}>{text}</span> : text}</>;
};

export default StyledText;
