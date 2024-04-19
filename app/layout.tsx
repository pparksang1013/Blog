import { HeaderComp } from "@/components/app/header/Index";

export const metadata = {
    title: "Blog",
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <link rel="favicon" href="./favicon.ico" />
            </head>
            <body>
                <HeaderComp />
                {children}
            </body>
        </html>
    );
}
