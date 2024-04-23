import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
    fonts: {
        mainfont: `suit, serif`,
        gogh: "gogh",
    },
    colors: {
        primary: "#fca61d",
        black: "#262626",
        grey: "#a6a6a6",
        blue: "#1f4eff",
    },
    rgb: {
        primary: "252, 166, 29",
        black: "38, 38, 38",
        grey: "166, 166, 166",
        blue: "31, 78, 255",
    },
});
