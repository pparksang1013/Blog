import Link from "next/link";
import { format } from "date-fns";
// API
import { getDatabase } from "@/app/api/getDatabase";
// STYLE
import { feedStyle } from "@/app/style/(blog)/blogfeed.css";
// COMP
import { Tag } from "../(common)/Tag";
import { Keyword } from "../(common)/Keyword";

async function BlogFeed() {
    const notionDatabase = await getDatabase();

    const feed = notionDatabase.map((ele) => {
        const date = format(new Date(ele.date), "yy. MM");

        return (
            <>
                <Link href={`posting/${ele.id}`} className={feedStyle.link} key={ele.id}>
                    <Keyword keyword={ele.keyword} />
                    <h1 className={feedStyle.title}>{ele.title}</h1>
                    <p className={feedStyle.date}>{date}</p>
                    <Tag tags={ele.tags} />
                </Link>
            </>
        );
    });

    return <main className={feedStyle.wrapper}>{feed}</main>;
}

export default BlogFeed;
