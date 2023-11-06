import Link from "next/link";
import PostTag from "./PostTag";

// 💅CSS
import style from "./blog.module.css";

interface postingProps {
    tag: string;
    title: string;
    path: string;
    summary: string;
    thumnail: string;
}

function GetPostContent(props: postingProps) {
    const { tag, title, path, summary, thumnail } = props;

    const postingPath = path.replace(".mdx", "");

    return (
        <div className={style.posting}>
            <PostTag tag={tag} />

            <div className={style.posting_contents}>
                <Link href={`blog/${postingPath}`}>
                    <h2 className={style.posting_title}>{title}</h2>
                </Link>
            </div>
        </div>
    );
}

export default GetPostContent;
