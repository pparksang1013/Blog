import { CustomContentsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";
import Link from "next/link";

export const CustomContents: React.FC<CustomContentsType> = ({ contents }) => {
    const list = contents.map((item) => {
        return (
            <li className={styles.customContents.li}>
                <Link href={`#${item}`} className={styles.customContents.li}>
                    {item}
                </Link>
            </li>
        );
    });

    return (
        <div className={styles.customContents.box}>
            <p className={styles.customContents.p}>on this page</p>
            <ul className={styles.customContents.ul}>{list}</ul>
        </div>
    );
};
