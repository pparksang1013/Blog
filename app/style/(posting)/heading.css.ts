import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/app/style/(global)/globalTheme.css";
// UTIL
import styleVariantsUtil from "@/app/util/(posting)/setStyleVariants";

const h1 = style({
    fontSize: "3rem",
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    WebkitTextStroke: 1,
    letterSpacing: -1,
    margin: "16px 0 2px",
});

const h2 = style({
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
});

const h3 = style({
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
});

const annotations = styleVariantsUtil();

export const h1Style = { h1, annotations };

export const h2Style = {
    h2,
    annotations,
};

export const h3Style = {
    h3,
    annotations,
};
