import { globalTheme } from "@/components/app/style/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const styles = {
    customP: style({
        lineHeight: 1.68,
        fontSize: 16.6,
        fontFamily: globalTheme.fonts.suit,

        selectors: {
            "h4 + &": {
                marginBottom: 14,
            },

            "blockquote &": {
                fontSize: "0.9em",
                lineHeight: 1.58,
            },

            "blockquote &:first-of-type": {
                marginBottom: 6,
            },
        },
    }),

    customPre: style({
        width: "100%",
        display: "inline-block",
        padding: "10px 20px",
        lineHeight: 1.38,
        backgroundColor: `rgba(${globalTheme.rgb.black}, 0.94)`,
        marginBottom: 10,
    }),

    customLi: style({
        lineHeight: 1.68,
        marginTop: 10,
        listStyle: "none",
        position: "relative",
        fontFamily: globalTheme.fonts.suit,

        ":first-of-type": {
            marginTop: 0,
        },

        selectors: {
            "ul > &:before": {
                content: "•",
                margin: "0 4px",
            },

            "ol > &": {
                counterIncrement: "counter",
                display: "flex",
                flexDirection: "row",
                gap: 10,
            },

            "ol > &:before": {
                content: `counter(counter) "."`,
                fontFamily: globalTheme.fonts.gogh,
                color: `rgba(${globalTheme.rgb.black}, 0.8)`,
            },

            "blockquote &": {
                fontSize: "0.9em",
                lineHeight: 1.48,
            },
        },
    }),

    customBlockQuote: style({
        padding: 16,
        border: `0.95px solid rgba(${globalTheme.rgb.black}, 0.3)`,
        borderRadius: 5,
        margin: "22px 0",
        background: `linear-gradient(145deg,rgba(${globalTheme.rgb.grey}, 0.1), rgba(${globalTheme.rgb.grey}, 0.3))`,
    }),

    customStrong: style({
        selectors: {
            "blockquote p &": {
                fontSize: "1rem",
                letterSpacing: -0.5,
                fontFamily: globalTheme.fonts.hack,
                lineHeight: 1.8,
            },

            "h5 > &": {
                color: globalTheme.colors.grey,
            },
        },
    }),

    customCode: style({
        selectors: {
            "p > &": {
                backgroundColor: `rgba(${globalTheme.rgb.grey}, 0.2)`,
                padding: "3px",
                fontFamily: globalTheme.fonts.hack,
                fontSize: "0.8em",
            },
        },
    }),

    customA: style({
        fontSize: "0.9em",
        color: globalTheme.colors.grey,
        fontFamily: globalTheme.fonts.suit,
        fontWeight: 500,
    }),

    customOption: style({
        fontSize: "0.6em",
        fontFamily: globalTheme.fonts.hack,
        display: "inline-block",
        padding: "0px 6px",
        border: `1px solid rgba(${globalTheme.rgb.black}, 0.2)`,
        borderRadius: 50,
        marginLeft: 3,
    }),

    customContents: {
        box: style({
            position: "fixed",
            top: 175,
            left: 240,
        }),

        p: style({
            fontWeight: 900,
        }),

        ul: style({
            margin: "10px 0 0 4px",
            padding: "4px 16px",
            borderLeft: `1.2px solid rgba(${globalTheme.rgb.black}, 1)`,
            position: "relative",
        }),

        li: style({
            fontFamily: `${globalTheme.fonts.suit}`,
            fontWeight: 500,
            lineHeight: 1.72,
            listStyle: "none",
        }),
    },
};
