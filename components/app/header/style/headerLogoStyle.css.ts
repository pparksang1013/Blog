import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../style/globalTheme.css";

const logo = style({
    fontWeight: 900,
    WebkitTextStroke: `1.2px rgba(${globalTheme.rgb.black}, 0.8)`,
    fontSize: "24px !important",
    margin: "0 !important",
});

const link = style({
    color: `rgba(${globalTheme.rgb.black}, 0.8)`,
});

export const styles = {
    logo,
    link,
};
