import { style } from "@vanilla-extract/css";
import { globalTheme } from "@/app/style/(global)/globalTheme.css";

export const patternStyle = style({
    width: "fit-content",
    padding: "2px 18px",
    border: `2.2px solid rgba(${globalTheme.rgb.primary}, 0.9)`,
    borderRadius: 50,
    fontSize: "1.1rem",
    marginBottom: 18,
    fontWeight: 600,
    letterSpacing: -0.4,
});
