import { CustomPropsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomPre: React.FC<CustomPropsType> = ({ children }) => {
    return <pre className={styles.customPre}>{children}</pre>;
};
