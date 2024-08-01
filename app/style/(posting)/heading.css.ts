import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/app/style/(global)/globalTheme.css";
// UTIL
import styleVariantsUtil from "@/app/util/(posting)/setStyleVariants";

const h1 = style({
    fontSize: "3.4rem",
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    WebkitTextStroke: 1,
    letterSpacing: "-0.04em",
    margin: "16px 0 2px",
    fontStyle: "oblique",
    wordSpacing: 4,
    textDecoration: "12px underline",
    textUnderlineOffset: -10,
    textDecorationSkipInk: "none",
    textDecorationColor: `rgba(${globalTheme.rgb.primary}, 0.6)`,
});

const h2 = style({
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    fontSize: "2.2rem",
    letterSpacing: "-0.04em",
    WebkitTextStroke: 1,
    // WebkitTextStroke: `10 rgba(${globalTheme.rgb.black}, 0.9)`,
});

const h3 = style({
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    fontSize: "1.3rem",
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
