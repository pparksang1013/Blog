import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";

const wrapper = style({
    padding: "20px 0 10px 0",
    minWidth: 800,
    maxWidth: 800,
});

const title = style({
    fontSize: "4rem",
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    WebkitTextStroke: 2,
    letterSpacing: -2,
    wordSpacing: 5,
    margin: "10px 0",

    ":after": {
        content: ".",
        color: globalTheme.colors.primary,
    },
});

export const infoStyle = {
    wrapper,
    title,
};
