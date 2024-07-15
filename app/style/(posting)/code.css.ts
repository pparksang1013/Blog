import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";
import { font } from "../(global)/globalFont.css";

const pre = style({
    backgroundColor: `rgba(30,33,39, 1)`,
    fontSize: "0.9em",
    fontFamily: font.coding,
    padding: 14,
});

export const codeStyle = {
    pre,
};
