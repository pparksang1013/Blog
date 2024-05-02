import { CustomPropsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomCode: React.FC<CustomPropsType> = ({ children }) => {
    return <code className={styles.customCode}>{children}</code>;
};
