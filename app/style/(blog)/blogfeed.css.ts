import { globalTheme } from "@/app/style/(global)/globalTheme.css";
import { style } from "@vanilla-extract/css";

const wrapper = style({
    display: "flex",
    gap: 20,
});

const link = style({
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: `calc((1400px / 3) - 30px)`,
    minHeight: 300,
    padding: "14px 20px",
    borderRadius: 6,
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.06), -1px -1px 4px rgba(0, 0, 0, 0.06)",
    position: "relative",
    border: `1px solid transparent`,

    ":hover": {
        border: `1px solid rgba(${globalTheme.rgb.black}, 0.4)`,
    },
});

const title = style({
    fontWeight: 900,
    fontSize: "2.2rem",
    color: `rgba(${globalTheme.rgb.black}, 0.9)`,
    letterSpacing: -0.5,
    wordSpacing: 4,
    marginTop: 2,
});

const date = style({
    fontSize: "0.7em",
    fontWeight: 900,
    color: globalTheme.colors.gray,
});

export const feedStyle = {
    wrapper,
    link,
    title,
    date,
};
