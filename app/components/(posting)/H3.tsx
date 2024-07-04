// STYLE
import { h3Style } from "@/app/style/(posting)/heading.css";
// COMP
import StyledText from "./StyledText";

export const H3 = ({ h3 }: { h3: any }) => {
    return (
        <h3 className={h3Style.h3}>
            {h3.rich_text.map((ele: any) => {
                return <StyledText text={ele.plain_text} annotations={ele.annotations} style={h3Style} />;
            })}
        </h3>
    );
};
