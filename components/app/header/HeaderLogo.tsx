import { styles } from "./style/headerLogoStyle.css";
import Link from "next/link";

export const HeaderLogo = () => {
    return (
        <h2 className={styles.logo}>
            <Link href="/" className={styles.link}>
                Thud
            </Link>
        </h2>
    );
};
