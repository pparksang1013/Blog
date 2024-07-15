// STYLE
import { h1Style } from "@/app/style/(posting)/heading.css";
// COMP
import StyledText from "./StyledText";

export const H1 = ({ h1, idx }: { h1: any; idx: number }) => {
    return (
        <h1 className={h1Style.h1} key={idx}>
            {h1.rich_text.map((ele: any) => {
                return <StyledText text={ele.plain_text} annotations={ele.annotations} style={h1Style} />;
            })}
        </h1>
    );
};
