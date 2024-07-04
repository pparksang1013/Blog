// STYLE
import { h2Style } from "@/app/style/(posting)/heading.css";
// COMP
import StyledText from "./StyledText";

export const H2 = ({ h2 }: { h2: any }) => {
    return (
        <h2 className={h2Style.h2}>
            {h2.rich_text.map((ele: any) => {
                return <StyledText text={ele.plain_text} annotations={ele.annotations} style={h2Style} />;
            })}
        </h2>
    );
};
