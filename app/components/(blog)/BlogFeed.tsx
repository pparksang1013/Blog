import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
// API
import { getDatabase } from "@/app/api/getDatabase";
// STYLE
import { feedStyle } from "@/app/style/(blog)/blogfeed.css";
// COMP
import { Tag } from "../(common)/Tag";
import { Keyword } from "../(common)/Keyword";
// ASSET
import posting_01 from "@/public/img/posting01.jpg";

async function BlogFeed() {
    const notionDatabase = await getDatabase();
    const imgArr = [posting_01];

    const feed = notionDatabase.map((ele, i) => {
        const date = format(new Date(ele.date), "yy. MM");

        return (
            <>
                <Link href={`posting/${ele.id}`} className={feedStyle.link} key={ele.id}>
                    <div className={feedStyle.imgBox}>
                        <Image src={imgArr[i]} alt="posting img" objectFit="cover" fill className={feedStyle.img} />
                        <span className={feedStyle.date}>{date}</span>
                        <Keyword keyword={ele.keyword} />
                    </div>

                    <div className={feedStyle.contentsWrapper}>
                        <h1 className={feedStyle.title}>{ele.title}</h1>
                        <Tag tags={ele.tags} />
                    </div>
                </Link>
            </>
        );
    });

    return (
        <main>
            <h2 className={feedStyle.feedText}>feed.</h2>
            <div className={feedStyle.wrapper}>{feed}</div>
        </main>
    );
}

export default BlogFeed;
