import { styles } from "./style/postingBoxStyle.css";

export const PostingBox = ({ children }: { children: React.ReactNode }) => {
    return <main className={styles.box}>{children}</main>;
};
