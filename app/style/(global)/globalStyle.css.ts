import { globalStyle } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: globalTheme.fonts.mainfont,
});

globalStyle("html body", {
    backgroundColor: "#fcfcfc",
});

globalStyle("a", {
    textDecoration: "none",
    color: globalTheme.colors.black,
});
