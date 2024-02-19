import Link from "next/link";
import Image from "next/image";
import style from "./header.module.css";
import logo from "../../../public/logo.png";

function Header() {
    return (
        <header className={style.wrapper}>
            <Link href="/" className={style.logo}>
                <Image src={logo} height={30} alt="logo" />
            </Link>
        </header>
    );
}

export default Header;
