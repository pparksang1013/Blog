import Link from "next/link";
import useNotionStore from "@/store/notionStore";
import { blogFeedStyle } from "./style/blogFeed.css";
import { format } from "date-fns";

// TYPE
import { NotionDatabaseType } from "@/type/notionDatabaseType";

// CHILD COMP
import { blogFeedChild } from "./child";

export const BlogFeed = () => {
    const feedItem = useNotionStore.getState().database.map((ele: NotionDatabaseType) => {
        const date = format(new Date(ele.date), "yy. MM");

        return (
            <>
                <Link href={ele.id} className={blogFeedStyle.link}>
                    <blogFeedChild.Keyword keyword={ele.keyword} />
                    <h1 className={blogFeedStyle.title}>{ele.title}</h1>
                    <p className={blogFeedStyle.date}>{date}</p>
                    <blogFeedChild.Tags tags={ele.tags} />
                </Link>
            </>
        );
    });

    return <div className={blogFeedStyle.box}>{feedItem}</div>;
};
