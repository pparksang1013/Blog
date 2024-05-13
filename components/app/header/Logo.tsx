import { headerStyle } from "./style/header.css";
import Link from "next/link";

export const Logo = () => {
    return (
        <div className={headerStyle.logoBox}>
            <Link href="/" className={headerStyle.logo}>
                우당
                <br />
                퉁탕
            </Link>
        </div>
    );
};
