import { styles } from "../style/feedByMonthStyle.css";

export const FeedByMonth = ({ month }: { month: string }) => {
    return <h4 className={styles.month}>{month}</h4>;
};
