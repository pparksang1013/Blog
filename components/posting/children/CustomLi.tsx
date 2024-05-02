import { CustomPropsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomLi: React.FC<CustomPropsType> = ({ children }) => {
    return <li className={styles.customLi}>{children}</li>;
};
