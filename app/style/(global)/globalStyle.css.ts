import { globalStyle } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "pretendard",
});

globalStyle("html body", {
    backgroundColor: "#fcfcfc",
});

globalStyle("a", {
    textDecoration: "none",
    color: globalTheme.colors.black,
});

globalStyle("code", {
    fontFamily: "mono",
    lineHeight: 1.44,
    fontSize: 13,
    color: "rgb(229, 231, 235)",
});

globalStyle("code *", {
    fontFamily: "mono",
});

globalStyle("::selection", {
    color: globalTheme.colors.green,
});
