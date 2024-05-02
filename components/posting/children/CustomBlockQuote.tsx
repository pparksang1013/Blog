import { CustomPropsType } from "../type/custom_type";
import { styles } from "../style/customStyle.css";

export const CustomBlockQuote: React.FC<CustomPropsType> = ({ children }) => {
    return <blockquote className={styles.customBlockQuote}>{children}</blockquote>;
};
