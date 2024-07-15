import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";

const aside = style({
    minWidth: 300,
    maxWidth: 300,
    padding: "20px 0 10px 0",
    borderRight: `1px solid rgba(${globalTheme.rgb.gray}, 0.5)`,
});

const title = style({
    fontSize: "2rem",
    backgroundColor: `rgba(${globalTheme.rgb.primary}, 0.5)`,
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    WebkitTextStroke: 1,
    width: "fit-content",
    marginTop: 4,
});

export const infoStyle = {
    aside,
    title,
};
