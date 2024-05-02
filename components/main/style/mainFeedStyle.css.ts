import { style } from "@vanilla-extract/css";

const box = style({
    gap: 40,
    marginTop: 40,
    marginBottom: 120,
    display: "flex",

    "@media": {
        "screen and (max-width: 1400px)": {
            display: "block",
        },
    },
});

export const styles = {
    box,
};
