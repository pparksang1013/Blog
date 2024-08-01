import { styleVariants, style } from "@vanilla-extract/css";

const basedBox = style({
    width: 1400,
    margin: "0 auto",
});

const headerBox = style({
    padding: "28px 0",
    display: "flex",
    justifyContent: "center",
});

const blogBox = style({
    width: 900,
    margin: "20px auto",
});

const postingBox = style({
    margin: "20px auto",
});

const box = {
    headerBox,
    blogBox,
    postingBox,
};

export const boxStyle = styleVariants(box, (value) => {
    return [basedBox, value];
});
