import { globalStyle } from "@vanilla-extract/css";
import { globalTheme } from "@/components/app/style/globalTheme.css";
import { styles } from "./postingContentsStyle.css";

globalStyle(`${styles.box} [data-rehype-pretty-code-title]`, {
    color: "#fff",
    backgroundColor: `rgba(${globalTheme.rgb.black}, 0.8)`,
    fontFamily: globalTheme.fonts.hack,
    padding: "8px 18px",
    fontSize: "0.8em",
    marginTop: 10,
});

globalStyle(`${styles.box} code span`, {
    fontSize: "0.9em",
    fontFamily: globalTheme.fonts.hack,
});

globalStyle(`${styles.box} ol`, {
    counterReset: "counter",
});

globalStyle(`${styles.box} h2`, {
    color: globalTheme.colors.primary,
    marginBottom: 6,
    fontSize: 48,
    fontWeight: 900,
    margin: "70px 0 20px",
    letterSpacing: -1,
});

globalStyle(`${styles.box} h3`, {
    color: `rgba(${globalTheme.rgb.black}, 0.95)`,
    margin: "48px 0 48px",
    fontWeight: 800,
    fontSize: 38,
});

globalStyle(`${styles.box} h4`, {
    color: `rgba(${globalTheme.rgb.black}, 0.95)`,
    margin: "50px 0px 10px",
    fontSize: 30,
    letterSpacing: -1,
});

globalStyle(`${styles.box} h5`, {
    margin: "20px 0px",
    fontSize: 24,
    letterSpacing: -1,
});

globalStyle(`${styles.box} h6`, {
    margin: "10px 0px",
    fontSize: 19,
    letterSpacing: -1,
});
