import { globalFontFace, style } from "@vanilla-extract/css";

globalFontFace("mono", {
    src: `url('/font/MonaspaceKryptonVarVF.ttf') format('truetype')`,
    fontWeight: "variable",
});

globalFontFace("pretendard", [
    {
        src: `url('/font/PretendardVariable.woff2') format('woff2')`,
        fontWeight: "variable",
    },
]);

export const font = {
    coding: style({
        fontFamily: "mono",
    }),

    pretendard: style({
        fontFamily: "pretendard",
    }),
};
