import localFont from "next/font/local";

export const wanted = localFont({
    variable: "--font-wanted",
    src: [
        {
            path: "../asset/font/WantedSansVariable.ttf",
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

export const proggy = localFont({
    variable: "--font-proggy",
    src: [
        {
            path: "../asset/font/ProggySquare.ttf",
            weight: "400",
        },
    ],
});
