import { Header } from "@/components/app/header/Index";
import "devicon/devicon.min.css";

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
