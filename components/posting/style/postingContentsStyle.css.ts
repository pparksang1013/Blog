import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/components/app/style/globalTheme.css";

const box = style({
    marginTop: 100,
    position: "relative",
});

const title = style({
    fontSize: "4rem",
    fontWeight: 900,
    color: "transparent",
    background: `linear-gradient(90deg,rgba(${globalTheme.rgb.black}, 0.9), rgba(${globalTheme.rgb.black}, 0.4) 120%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
});

const date = style({
    fontWeight: 900,
    color: `rgba(${globalTheme.rgb.black}, 0.6)`,
});

export const styles = {
    box,
    title,
    date,
};
