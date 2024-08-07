// STYLE
import { h2Style } from "@/app/style/(posting)/heading.css";
// COMP
import StyledText from "./StyledText";
import { Pattern } from "./Pattern";

export const H2 = ({ h2, idx }: { h2: any; idx: number }) => {
    if (h2.rich_text[0].plain_text === "pattern") {
        return <Pattern />;
    }

    return (
        <h2 className={h2Style.h2} key={idx}>
            {h2.rich_text.map((ele: any) => {
                return <StyledText text={ele.plain_text} annotations={ele.annotations} style={h2Style} />;
            })}
        </h2>
    );
};
