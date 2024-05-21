import { globalTheme } from "@/components/app/style/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
    fontSize: "4rem",
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    backgroundColor: `rgba(${globalTheme.rgb.primary}, 0.7)`,
    width: "fit-content",
    padding: "0 5px",
});

export const h1 = style({
    fontSize: "3rem",
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
});

export const h2 = style({
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
});

export const ul = style({
    marginTop: 8,
});

export const childUl = style({
    marginLeft: 24,
});

export const li = style({
    fontSize: 16.8,
    lineHeight: 1.68,
    listStylePosition: "inside",
});

export const p = style({
    fontSize: 16.8,
    lineHeight: 1.68,
});
