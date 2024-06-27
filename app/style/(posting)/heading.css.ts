import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/app/style/(global)/globalTheme.css";

export const h1Style = style({
    fontSize: "3rem",
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
});

export const h2Style = style({
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
});
