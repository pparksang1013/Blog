import localFont from "next/font/local";

export const suit = localFont({
    variable: "--font-suit",
    src: [
        {
            path: "../asset/font/SUIT-Variable.woff2",
            weight: "variable",
        },
    ],
});

export const mona = localFont({
    variable: "--font-mona",
    src: [
        {
            path: "../asset/font/Mona-Sans-ExtraBoldWide.woff2",
            weight: "900",
        },
        {
            path: "../asset/font/Mona-Sans-RegularWide.woff2",
            weight: "400",
        },
        {
            path: "../asset/font/Mona-Sans-LightWide.woff2",
            weight: "100",
        },
    ],
});
