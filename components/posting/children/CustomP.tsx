import { CustomPropsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomP: React.FC<CustomPropsType> = ({ children }) => {
    return <p className={styles.customP}>{children}</p>;
};
