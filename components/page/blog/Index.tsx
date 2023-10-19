import { allPosts, Post } from "@/.contentlayer/generated";
import GetPostContent from "./GetPostContent";
import { compareDesc } from "date-fns";

function Blog() {
    const sortDate = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return (
        <div>
            {sortDate.map((ele: Post, i: number) => {
                return (
                    <GetPostContent
                        tag={ele.tag}
                        title={ele.title}
                        path={ele._raw.sourceFileName}
                        date={ele.date}
                        summary={ele.summary}
                        key={i}
                    />
                );
            })}
        </div>
    );
}

export default Blog;
