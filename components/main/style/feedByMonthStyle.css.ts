import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/components/app/style/globalTheme.css";

const month = style({
    maxWidth: 100,
    lineHeight: 1,
    fontFamily: globalTheme.fonts.gogh,
    fontSize: "2rem",
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.8)`,
    textShadow: `2px 2px 8px rgba(${globalTheme.rgb.black}, 0.1)`,
    display: "block",

    "@media": {
        "screen and (max-width: 1400px)": {
            display: "none",
        },
    },
});

export const styles = { month };
