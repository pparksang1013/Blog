import Link from "next/link";
import Tag from "../../Tag";
import Title from "./Title";

// 💅CSS
import style from "./blog.module.css";
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
            <Link href={`blog/${blogPath}`}>
                <Title title={title} />

                <Tag tag={tag} />

                <GetKeywords keywordArr={keywords} />

                <CiLocationArrow1 className={style.icon} />
            </Link>
        </div>
    );
}

export default GetPostContent;
