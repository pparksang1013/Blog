import { styles } from "./style/headerBoxStyle.css";

export const HeaderBox = ({ children }: { children: React.ReactNode }) => {
    return <header className={styles.box}>{children}</header>;
};
