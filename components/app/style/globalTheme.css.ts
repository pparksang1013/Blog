import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
    fonts: {
        mainfont: `suit, serif`,
        suit: `suit`,
    },
    colors: {
        primary: "FCA61D",
    },
});
