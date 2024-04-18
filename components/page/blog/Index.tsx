import { allPosts, Post } from "@/.contentlayer/generated";
import GetPostContent from "./GetPostContent";
import { compareDesc } from "date-fns";

// 💅CSS
import style from "../../../style/blog/blog.module.css";

function Blog() {
    const sortDate = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return (
        <div className={style.wrapper}>
            {sortDate.map((ele: Post, i: number) => {
                console.log(ele.keywords);
                return (
                    <GetPostContent
                        tag={ele.tag}
                        title={ele.title}
                        path={ele._raw.sourceFileName}
                        keywords={ele.keywords}
                        key={i}
                    />
                );
            })}
        </div>
    );
}

export default Blog;
