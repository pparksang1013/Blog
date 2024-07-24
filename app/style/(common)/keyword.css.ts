import { style } from "@vanilla-extract/css";
import { globalTheme } from "../(global)/globalTheme.css";

const common = style({
    width: 22,
    height: 22,
    borderRadius: "50%",
    position: "absolute",
    right: 0,
    marginRight: 12,
});

const react = style([
    common,
    {
        backgroundColor: globalTheme.colors.react,
    },
]);

export const keywordStyle = {
    react,
};
