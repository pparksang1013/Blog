import { globalFontFace, style } from "@vanilla-extract/css";

globalFontFace("mono", {
    src: `url('/font/MonaspaceKryptonVarVF.ttf') format('truetype')`,
    fontWeight: "variable",
});

globalFontFace("line", [
    {
        src: `url('/font/LINESeedKR-Th.woff2') format('woff2')`,
        fontWeight: "100",
    },
    {
        src: `url('/font/LINESeedKR-Rg.woff2') format('woff2')`,
        fontWeight: "400",
    },
    {
        src: `url('/font/LINESeedKR-Bd.woff2') format('woff2')`,
        fontWeight: "900",
    },
]);

export const font = {
    coding: style({
        fontFamily: "mono",
    }),
    line: style({
        fontFamily: "line, serif",
    }),
};
