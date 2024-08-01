import { style } from "@vanilla-extract/css";
// UTIL
import styleVariantsUtil from "@/app/util/(posting)/setStyleVariants";

const p = style({
    fontSize: 17.8,
    lineHeight: 1.78,
    fontWeight: 400,
    margin: "10px 0",
    wordSpacing: 0.8,
    letterSpacing: -0.2,
});

const annotations = styleVariantsUtil();

export const paragraphStyle = {
    p,
    annotations,
};
