import { globalFontFace, style } from "@vanilla-extract/css";

const suit = "suit";

globalFontFace(suit, {
    src: `url('/SUIT-Variable.woff2') format('woff2')`,
    fontWeight: "variable",
});

export const font = style({
    fontFamily: suit,
});
