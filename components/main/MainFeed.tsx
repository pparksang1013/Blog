import { styles } from "./style/mainFeedStyle.css";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, format } from "date-fns";

// TYPE
import { PostsByMonthInterface } from "./type/feed_type";

// COMP
import { FeedByMonth } from "./children/FeedByMonth";
import { FeedContents } from "./children/FeedContents";

export const MainFeed = () => {
    const sortedDate = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    const postsByMonth = sortedDate.reduce<PostsByMonthInterface>((acc, post) => {
        const month = format(new Date(post.date), "yyy. MM ");

        if (!acc[month]) {
            acc[month] = [];
        }
        acc[month].push(post);
        return acc;
    }, {});

    return (
        <>
            {Object.entries(postsByMonth).map(([month, posts]) => {
                return (
                    <div className={styles.box}>
                        <FeedByMonth month={month} />
                        <FeedContents posts={posts} />
                    </div>
                );
            })}
        </>
    );
};
