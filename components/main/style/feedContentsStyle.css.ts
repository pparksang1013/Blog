import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/components/app/style/globalTheme.css";

const box = style({
    width: "100%",

    "@media": {
        "screen and (max-width: 800px)": {
            minWidth: 420,
        },
    },
});

const link = style({
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 4px rgba(0, 0, 0, 0.08)",
    borderRadius: 40,
    backgroundColor: "#fff",
    border: `1px solid transparent`,
    maxHeight: 220,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    padding: "30px 40px 100px",
    gap: 28,
    position: "relative",

    ":hover": {
        border: `1px solid ${globalTheme.colors.primary}`,
    },

    ":last-of-type": {
        marginBottom: 0,
    },

    "@media": {
        "screen and (max-width: 1400px)": {
            display: "block",
            height: "fit-content",
            maxHeight: "fit-content",
            padding: "30px 40px 50px",
        },
    },
});

const left = style({
    width: "60%",

    "@media": {
        "screen and (max-width: 1400px)": {
            width: "100%",
        },
    },
});

const numBox = style({
    fontWeight: 900,
    fontFamily: globalTheme.fonts.gogh,
    fontSize: "1em",
    color: `rgba(${globalTheme.rgb.black}, 0.8)`,
});

const title = style({
    fontSize: "2.4rem",
    fontWeight: 900,
    WebkitTextStroke: 0.4,
    marginTop: -5,
    textShadow: `2px 2px 4px rgba(${globalTheme.rgb.black}, 0.05), -2px -2px 4px rgba(${globalTheme.rgb.black}, 0.05)`,
    color: "transparent",
    background: `linear-gradient(90deg,rgba(${globalTheme.rgb.black}, 0.9), rgba(${globalTheme.rgb.black}, 0.4) 120%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: -0.5,
    wordSpacing: 5,
});

const ul = style({
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
});

const li = style({
    listStyle: "none",
    border: `1px solid rgba(${globalTheme.rgb.primary}, 1)`,
    color: `rgba(${globalTheme.rgb.black}, 0.8)`,
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: "0.7em",
    fontFamily: globalTheme.fonts.suit,
});

const right = style({
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontFamily: globalTheme.fonts.gogh,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: "30px 40px",
    color: globalTheme.colors.grey,
    transition: "all 0.25s",
    fontSize: "0.9em",

    "@media": {
        "screen and (max-width: 1400px)": {
            display: "none",
        },
    },

    selectors: {
        [`${link}:hover &`]: {
            color: `rgba(${globalTheme.rgb.primary}, 1)`,
        },
    },
});

export const styles = {
    box,
    link,
    left,
    numBox,
    title,
    ul,
    li,
    right,
};
