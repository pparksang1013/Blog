// COMP
import { Header } from "../components/(layout)/Header";
// LIB
import "devicon/devicon.min.css";
// CSS
import "@/app/style/(global)/globalStyle.css";

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
                <Header />
                {children}
            </body>
        </html>
    );
}
