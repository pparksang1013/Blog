import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";
import { font } from "../(global)/globalFont.css";

const pre = style({
    backgroundColor: `rgba(30,33,39, 0.9)`,
    fontSize: "0.9em",
    fontFamily: font.coding,
    padding: "20px 24px",
    margin: "8px 0",
    borderRadius: 4,
});

export const codeStyle = {
    pre,
};
