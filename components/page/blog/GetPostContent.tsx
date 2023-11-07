import Link from "next/link";
import PostTag from "./PostTag";
import Image from "next/image";

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
            <div className={style.image_box}>
                <Image src={thumnail} alt="posting" layout="fill" />
            </div>

            <div className={style.posting_contents}>
                <PostTag tag={tag} />

                <Link href={`blog/${postingPath}`}>
                    <h2 className={style.posting_title}>{title}</h2>
                </Link>

                <div className={style.summary}>{summary}</div>
            </div>
        </div>
    );
}

export default GetPostContent;
