import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
// API
import { getDatabase } from "@/app/api/getDatabase";
// STYLE
import { feedStyle } from "@/app/style/(blog)/blogfeed.css";
// COMP
import { Tag } from "../(common)/Tag";

async function BlogFeed() {
    const notionDatabase = await getDatabase();

    const feed = notionDatabase.map((ele, i) => {
        const date = format(new Date(ele.date), "yy. MM");

        return (
            <>
                <Link href={`posting/${ele.id}`} className={feedStyle.link} key={i}>
                    <div className={feedStyle.left}>
                        <span className={feedStyle.date}>{date}</span>
                    </div>

                    <div className={feedStyle.contentsWrapper}>
                        <h1 className={feedStyle.title}>
                            {ele.title} <b className={feedStyle.arrow}>🡒</b>
                        </h1>
                        <Tag tags={ele.tags} />
                        <span className={feedStyle.emoji}>👀</span>
                    </div>
                </Link>
            </>
        );
    });

    return (
        <main>
            <h2 className={feedStyle.feedText}>feed.</h2>
            <div>{feed}</div>
        </main>
    );
}

export default BlogFeed;
