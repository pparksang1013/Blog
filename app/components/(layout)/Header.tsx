// COMP
import { Box } from "../(common)/Box";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo.png";

export const Header = () => {
    return (
        <Box styleValue="headerBox">
            <Link href="/">
                <Image src={logo} alt="logo" width={38} />
            </Link>
        </Box>
    );
};
