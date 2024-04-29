import { Post } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { styles } from "./style/postingContentsStyle.css";
import { format } from "date-fns";
import "./style/customGlobalStyle.css";

// COMP
import { CustomMdx } from "./children/CustomMdx";

export const PostingContents = ({ posting }: { posting: Post }) => {
    const date = format(new Date(posting.date), "yy. MM");

    const CustomMDX = useMDXComponent(posting.body.code);
    return (
        <>
            <div className={styles.box}>
                <h1 className={styles.title}>{posting.title}</h1>
                <p className={styles.date}>{date}</p>
            </div>
            <CustomMDX components={CustomMdx} />
        </>
    );
};
