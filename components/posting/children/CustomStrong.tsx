import { CustomPropsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomStrong: React.FC<CustomPropsType> = ({ children }) => {
    return <strong className={styles.customStrong}>{children}</strong>;
};
