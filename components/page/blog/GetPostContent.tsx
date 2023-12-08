import Link from "next/link";
import Tag from "../../Tag";

// 💅CSS
// import style from "./blog.module.css";
import GetKeywords from "./GetKeywords";
import "/style/blog.css";

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
        <div className="blog">
            <Link href={`blog/${blogPath}`}>
                <h1 className="blog_title">{title}</h1>

                <Tag tag={tag} />

                <GetKeywords keywordArr={keywords} />

                <CiLocationArrow1 className="icon" />
            </Link>
        </div>
    );
}

export default GetPostContent;
