import { globalFontFace, style } from "@vanilla-extract/css";

globalFontFace("suit", {
    src: `url('/SUIT-Variable.woff2') format('woff2')`,
    fontWeight: "variable",
});

export const suit = style({
    fontFamily: "suit",
});
