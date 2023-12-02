import Link from "next/link";
import Tag from "../../Tag";
import Image from "next/image";

// 💅CSS
import style from "./blog.module.css";

interface blogProps {
    tag: string;
    title: string;
    path: string;
    summary: string;
    thumbnail: string;
}

function GetPostContent(props: blogProps) {
    const { tag, title, path, summary, thumbnail } = props;

    const blogPath = path.replace(".mdx", "");

    return (
        <div className={style.blog}>
            <div className={style.image_box}>
                <Image src={thumbnail} alt="posting" layout="fill" />
            </div>

            <div className={style.blog_contents}>
                <Tag tag={tag} />

                <Link href={`blog/${blogPath}`}>
                    <h1 className={style.blog_title}>{title}</h1>
                </Link>

                <div className={style.summary}>{summary}</div>
            </div>
        </div>
    );
}

export default GetPostContent;
