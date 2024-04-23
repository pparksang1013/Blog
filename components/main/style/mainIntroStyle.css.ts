import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/components/app/style/globalTheme.css";

const box = style({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.1)",
    padding: 100,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 40,
});

export const styles = {
    box,
};
