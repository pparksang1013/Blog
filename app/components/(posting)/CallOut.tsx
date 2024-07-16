import { Fragment } from "react";
// STYLE
import { calloutStyle } from "@/app/style/(posting)/callout.css";
// TYPE
import { RichTextInterface } from "@/app/types/rich_text";
// COMP
import StyledText from "./StyledText";

export const CallOut = ({ callout, idx }: { callout: any; idx: number }) => {
    const process = callout.rich_text.map((ele: RichTextInterface) => {
        return ele.plain_text.split("\n").map((text: string, index: number) => (
            <Fragment key={index}>
                <p className={calloutStyle.text}>
                    <StyledText text={text} annotations={ele.annotations} style={calloutStyle} />
                </p>
            </Fragment>
        ));
    });

    const emoji = callout.icon.emoji;

    return (
        <div className={calloutStyle.box} key={idx}>
            <div className={calloutStyle.emoji}>{emoji}</div>
            <div className={calloutStyle.text}>{process}</div>
        </div>
    );
};
