import Link from "next/link";
import Tag from "../../Tag";

// 💅CSS
import style from "../../../style/blog/blog.module.css";
import GetKeywords from "./GetKeywords";

import { CiLocationArrow1 } from "react-icons/ci";

interface blogProps {
    tag: string;
    title: string;
    path: string;
    keywords: string[];
}

function GetPostContent(props: blogProps) {
    const { tag, title, path, keywords } = props;

    const blogPath = path.replace(".mdx", "");

    return (
        <div className={style.blog}>
            <Tag tag={tag} size={30} />

            <Link href={`posting/${blogPath}`}>
                <h2 className={style.blog_title}>{title}</h2>

                <GetKeywords keywordArr={keywords} />

                <CiLocationArrow1 className={style.icon} />
            </Link>
        </div>
    );
}

export default GetPostContent;
