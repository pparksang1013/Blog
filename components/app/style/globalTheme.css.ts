import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
    fonts: {
        mainfont: `gogh, suit, serif`,
        suit: "suit, serif",
        hack: "hack, suit",
        gogh: "gogh",
    },
    colors: {
        primary: "#fca61d",
        black: "#262626",
        grey: "#a6a6a6",
        blue: "#1f4eff",
        green: "#4D7D5F",
    },
    rgb: {
        primary: "252, 166, 29",
        black: "38, 38, 38",
        grey: "166, 166, 166",
        blue: "31, 78, 255",
        green: "18, 115, 105",
    },
});
