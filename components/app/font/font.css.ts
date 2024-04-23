import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("suit", {
    src: `url('/font/SUIT-Variable.woff2') format('woff2')`,
    fontWeight: "variable",
});

globalFontFace("gogh", {
    src: `url('/font/Gogh-ExtraBold.woff2') format('woff2')`,
    fontWeight: "900",
});
