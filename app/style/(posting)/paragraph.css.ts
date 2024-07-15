import { style } from "@vanilla-extract/css";
import { font } from "../(global)/globalFont.css";
// UTIL
import styleVariantsUtil from "@/app/util/(posting)/setStyleVariants";

const p = style({
    fontSize: 16.8,
    lineHeight: 1.68,
});

const annotations = styleVariantsUtil();

export const paragraphStyle = {
    p,
    annotations,
};
