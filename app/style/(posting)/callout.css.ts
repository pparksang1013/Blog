import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";
// UTIL
import styleVariantsUtil from "@/app/util/(posting)/setStyleVariants";

const box = style({
    border: `1px solid rgba(${globalTheme.rgb.black}, 0.2)`,
    padding: 10,
    margin: "4px 0",
    borderRadius: 4,
    display: "flex",
    gap: 14,
});

const emoji = style({
    fontSize: 30,
});

const text = style({
    lineHeight: 1.68,
    fontSize: 15,
    margin: "2px 0",
});

const annotations = styleVariantsUtil();

export const calloutStyle = {
    box,
    emoji,
    text,
    annotations,
};
