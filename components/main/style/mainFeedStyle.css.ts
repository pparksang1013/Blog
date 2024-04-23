import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/components/app/style/globalTheme.css";

const box = style({
    display: "flex",
    gap: 40,
    marginTop: 40,
    marginBottom: 120,
});

export const styles = {
    box,
};
