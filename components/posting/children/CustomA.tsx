import { CustomATagType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomA: React.FC<CustomATagType> = ({ children, href }) => {
    return (
        <a className={styles.customA} href={href}>
            {children}
        </a>
    );
};
