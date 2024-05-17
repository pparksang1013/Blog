import { globalTheme } from "@/components/app/style/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const postingContentsStyle = {
    title: style({
        fontSize: "3rem",
        fontWeight: 900,
        color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    }),
    p: {
        fontSize: 16.8,
        lineHeight: 1.68,
    },
    h1: style({
        fontSize: "2.2rem",
        fontWeight: 900,
        color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    }),
};
