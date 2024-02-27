import Link from "next/link";
import Image from "next/image";
import style from "./header.module.css";
import logo from "../../../public/logo.png";

// COMPONENT
import Search from "@/components/search/Index";

function Header() {
    return (
        <header className={style.wrapper}>
            <div className={style.header_box}>
                <Link href="/" className={style.logo}>
                    <Image src={logo} height={30} alt="logo" />
                </Link>

                <Search />
            </div>
        </header>
    );
}

export default Header;
