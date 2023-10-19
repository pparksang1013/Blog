import Link from "next/link";
import style from "./header.module.css";

function Header() {
    return (
        <header className={style.wrapper}>
            <Link href="/" className={style.logo}>
                <div>
                    <span className={style.fontSizeDown}>i</span>
                    <span className={style.mp_letterStyle}>mp</span>ort
                </div>
            </Link>
        </header>
    );
}

export default Header;
