import Link from "next/link";
// COMP
import { Box } from "../(common)/Box";
// STYLE
import { logoStyle } from "@/app/style/(layout)/header.css";

export const Header = () => {
    return (
        <header>
            <Box styleValue="headerBox">
                <Link href="/">
                    <p className={logoStyle.logo}>
                        we <br />
                        never <br />
                        get old
                    </p>
                </Link>
            </Box>
        </header>
    );
};
