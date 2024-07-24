import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";

const logo = style({
    fontWeight: 900,
    fontSize: "1.1em",
    textAlign: "center",

    "::after": {
        content: ".",
        color: globalTheme.colors.primary,
    },
});

export const logoStyle = {
    logo,
};
