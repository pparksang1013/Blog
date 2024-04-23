import { Post } from "@/.contentlayer/generated";
import { styles } from "../style/feedContentsStyle.css";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";

export const FeedContents = ({ posts }: { posts: Post[] }) => {
    return (
        <div className={styles.box}>
            {posts.map((post: Post, i: number) => (
                <Link className={styles.link} href={post._raw.sourceFileName.replace(".mdx", "")}>
                    <div className={styles.left}>
                        <p className={styles.numBox}>{`[0${i + 1}]`}</p>
                        <h2 className={styles.title}> {post.title}</h2>
                        <ul className={styles.ul}>
                            {post.keywords.map((li) => (
                                <li className={styles.li}>{li}</li>
                            ))}
                        </ul>
                    </div>
                    <p className={styles.right}>
                        Read more
                        <IoArrowForwardCircle size={26} />
                    </p>
                </Link>
            ))}
        </div>
    );
};
