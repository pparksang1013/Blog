// STYLE
import { paragraphStyle } from "@/app/style/(posting)/paragraph.css";
// COMP
import StyledText from "./StyledText";
// TYPE
import { ParagraphInterface } from "@/app/types/paragraph";

export const Paragraph = ({ paragraph, idx }: { paragraph: ParagraphInterface; idx: number }) => {
    if (!paragraph.rich_text[0]) {
        return <br />;
    }

    return (
        <p className={paragraphStyle.p} key={idx}>
            {paragraph.rich_text.map((ele) => {
                return <StyledText text={ele.plain_text} annotations={ele.annotations} style={paragraphStyle} />;
            })}
        </p>
    );
};
