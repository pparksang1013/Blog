import { allPosts, Post } from "@/.contentlayer/generated";
import GetPostContent from "./GetPostContent";
import { compareDesc } from "date-fns";

// 💅CSS
import style from "./blog.module.css";

function Blog() {
    const sortDate = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return (
        <div className={style.wrapper}>
            {sortDate.map((ele: Post, i: number) => {
                return (
                    <GetPostContent
                        tag={ele.tag}
                        title={ele.title}
                        path={ele._raw.sourceFileName}
                        summary={ele.summary}
                        thumnail={ele.thumnail!}
                        key={i}
                    />
                );
            })}
        </div>
    );
}

export default Blog;
