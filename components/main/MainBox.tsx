import { styles } from "./style/mainBoxStyle.css";

export const MainBox = ({ children }: { children: React.ReactNode }) => {
    return <main className={styles.box}>{children}</main>;
};
