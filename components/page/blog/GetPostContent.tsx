import Link from "next/link";

// 💅CSS
import style from "./blog.module.css";

interface postingProps {
    tag: string;
    title: string;
    path: string;
    date: string;
    summary: string;
}

function GetPostContent(props: postingProps) {
    const { tag, title, path, date, summary } = props;

    const postingPath = path.replace(".mdx", "");

    return (
        <div className={style.posting}>
            <div className={style.posting_contents}>
                <Link href={`blog/${postingPath}`}>
                    <h2 className={style.posting_title}>{title}</h2>
                </Link>
            </div>
        </div>
    );
}

export default GetPostContent;
