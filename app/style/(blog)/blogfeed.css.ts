import { globalTheme } from "@/app/style/(global)/globalTheme.css";
import { style } from "@vanilla-extract/css";

const left = style({
    width: "10%",
});

const feedText = style({
    fontWeight: 900,
    fontSize: "1.6rem",
    letterSpacing: -1,
    color: `rgba(${globalTheme.rgb.primary}, 0.7)`,
    marginBottom: 10,
});

const link = style({
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: `2px 2px 10px rgba(${globalTheme.rgb.black}, 0.08), -2px -2px 10px rgba(${globalTheme.rgb.black}, 0.08)`,
    display: "flex",
    gap: 30,
    minHeight: 140,
    padding: "12px 14px",
    border: `1px solid transparent`,

    ":hover": {
        border: `1px solid rgba(${globalTheme.rgb.black}, 0.2)`,
    },
});

const contentsWrapper = style({
    position: "relative",
    width: "90%",
});

const title = style({
    fontWeight: 900,
    fontSize: "2.2rem",
    letterSpacing: -1,
    wordSpacing: 2,
    backgroundColor: `rgba(255, 255, 255, 1)`,
});

const arrow = style({
    fontWeight: 100,
});

const date = style({
    borderRadius: 50,
    width: "fit-content",
    fontSize: "0.6em",
    fontWeight: 900,
    border: "1px solid rgba(0, 0, 0, 0.4)",
    padding: "3px 10px",
    marginRight: 8,
});

const emoji = style({
    fontSize: "2rem",
    transform: "scaleX(-1)",
    position: "absolute",
    right: 8,
    bottom: 0,
});

export const feedStyle = {
    feedText,
    left,
    link,
    title,
    arrow,
    date,
    contentsWrapper,
    emoji,
};
