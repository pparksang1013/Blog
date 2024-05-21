import { style } from "@vanilla-extract/css";

export const headerStyle = {
    box: style({
        backgroundColor: "#fff",
        height: 100,
        display: "flex",
        alignItems: "center",
    }),
    logoBox: style({ marginLeft: 40 }),
    logo: style({
        fontWeight: 900,
        fontSize: 20,
    }),
};
