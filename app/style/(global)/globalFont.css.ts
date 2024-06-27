import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("pretendard", {
    src: `url('/font/PretendardVariable.woff2') format('woff2')`,
    fontWeight: "variable",
});

globalFontFace("hack", {
    src: `url('/font/Hack-Regular.ttf') format('truetype')`,
    fontWeight: 400,
});
