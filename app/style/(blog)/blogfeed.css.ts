import { globalTheme } from "@/app/style/(global)/globalTheme.css";
import { style } from "@vanilla-extract/css";

const wrapper = style({
    display: "flex",
    gap: 20,
});

const feedText = style({
    fontWeight: 900,
    fontSize: "1.6rem",
    letterSpacing: -1,
    color: `rgba(${globalTheme.rgb.green}, 0.7)`,
    marginBottom: 10,
});

const link = style({
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: `calc((1400px / 3) - 30px)`,
    maxHeight: 400,
    minHeight: 400,
    borderRadius: 12,
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.06), -1px -1px 4px rgba(0, 0, 0, 0.06)",
    border: `1px solid rgba(${globalTheme.rgb.black}, 0.1)`,
    overflow: "hidden",
    position: "relative",
    display: "block",
});

const imgBox = style({
    position: "relative",
    display: "block",
    height: 280,
    maxHeight: 280,
    minHeight: 280,
    padding: 12,
});

const img = style({
    filter: "grayscale(100%)",
    transition: "filter 0.2s ease-in",

    selectors: {
        [`${link}:hover &`]: {
            filter: "grayscale(15%)",
        },
    },
});

const contentsWrapper = style({
    padding: "1rem",
    height: 120,
    maxHeight: 120,
    minHeight: 120,
});

const title = style({
    fontWeight: 900,
    fontSize: "1.4rem",
    letterSpacing: -1,
    wordSpacing: 2,
    marginTop: 2,
    backgroundColor: `rgba(255, 255, 255, 1)`,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
});

const date = style({
    backgroundColor: `rgba(255, 255, 255, 0.1)`,
    backdropFilter: "blur(6px)",
    borderRadius: 50,
    width: "fit-content",
    fontSize: "0.82em",
    fontWeight: 900,
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    padding: "3px 10px",
});

export const feedStyle = {
    wrapper,
    feedText,
    imgBox,
    img,
    link,
    title,
    date,
    contentsWrapper,
};
