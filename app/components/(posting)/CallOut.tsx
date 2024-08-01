import { Fragment } from "react";
// STYLE
import { calloutStyle } from "@/app/style/(posting)/callout.css";
// TYPE
import { RichTextInterface } from "@/app/types/rich_text";

// TODO: 텍스트 서식이 적용되면, split이 텍스트 서식이 해당되는 객체마다 줄바꿈을 한다.
export const CallOut = ({ callout, idx }: { callout: any; idx: number }) => {
    const process = callout.rich_text.map((ele: RichTextInterface) => {
        return ele.plain_text.split("\n").map((text: string, index: number) => (
            <Fragment key={index}>
                <p className={calloutStyle.text}>{text}</p>
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
