import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
    colors: {
        primary: "#fca61d",
        black: "#262626",
        gray: "#a6a6a6",
        blue: "#1f4eff",
        green: "#4D7D5F",

        notion: {
            text: {
                gray: "#9B9A97",
                brown: "#64473A",
                orange: "#D9730D",
                yellow: "#F2D22E",
                green: "#0F7B6C",
                blue: "#0B6E99",
                purple: "#6940A5",
                pink: "#AD1A72",
                red: "#E03E3E",
            },
            background: {
                gray: "#EBECED",
                brown: "#E9E5E3",
                orange: "#FAEBDD",
                yellow: "#FBF3DB",
                green: "#DDEDEA",
                blue: "#DDEBF1",
                purple: "#EAE4F2",
                pink: "#F4DFEB",
                red: "#FBE4E4",
            },
        },
    },
    rgb: {
        primary: "252, 166, 29",
        black: "38, 38, 38",
        gray: "166, 166, 166",
        blue: "31, 78, 255",
        green: "18, 115, 105",
    },
});
