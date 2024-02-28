import "@/style/globals.css";
import Fonts from "@/components/Font";
import Header from "@/components/layout/header/Index";

export const metadata = {
    title: "Blog",
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <link rel="favicon" href="./favicon.ico" />
                <Fonts />
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
