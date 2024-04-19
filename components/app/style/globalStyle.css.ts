import { globalStyle } from "@vanilla-extract/css";
import { globalTheme } from "./globalTheme.css";

globalStyle("html,body", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: globalTheme.fonts.mainfont,
});
