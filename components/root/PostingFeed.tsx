import Link from "next/link";
import useNotionStore from "@/store/notionStore";
import { postingFeedStyle } from "./style/postingFeed.css";
import { format } from "date-fns";

// TYPE
import { NotionDatabaseType } from "@/type/notionDatabaseType";

// CHILD COMP
import { postingFeedChild } from "./child";

export const PostingFeed = () => {
    const feedItem = useNotionStore.getState().database.map((ele: NotionDatabaseType) => {
        const date = format(new Date(ele.date), "yy. MM");

        return (
            <>
                <Link href={ele.id} className={postingFeedStyle.link}>
                    <p className={postingFeedStyle.date}>{date}</p>
                    <h1 className={postingFeedStyle.title}>{ele.title} _</h1>
                    <postingFeedChild.Tags tags={ele.tags} />
                    <postingFeedChild.KeywordImg keyword={ele.keyword} />
                </Link>
            </>
        );
    });

    return <div className={postingFeedStyle.box}>{feedItem}</div>;
};
