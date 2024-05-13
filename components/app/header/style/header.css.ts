import { style } from "@vanilla-extract/css";

export const headerStyle = {
    box: style({
        backgroundColor: "#fff",
        height: 100,
        display: "flex",
        alignItems: "center",
    }),
    logoBox: style({
        width: 1400,
        margin: "0 auto",
    }),
    logo: style({
        fontWeight: 900,
        fontSize: 22,
    }),
};
