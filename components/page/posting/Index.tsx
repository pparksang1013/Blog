import { allPosts, Post } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

// COMPONENT
import CustomMDX from "./CustomMDX";
import Tag from "../../Tag";

// 💅CSS
import style from "../../../style/posting/posting.module.css";

// LIB
import replaceUtil from "@/lib/replaceUtil";

export function generateStaticParams() {
    const staticPath = allPosts.map((post: Post) => {
        return post._raw.flattenedPath;
    });

    return staticPath;
}

function BlogPosting({ params }: { params: { slug: string } }) {
    const findPath: any = allPosts.find((post: Post) => {
        const replacePath = replaceUtil(post._raw.sourceFileName);

        return replacePath === params.slug;
    });

    const MDXComponet = useMDXComponent(findPath.body.code);

    return (
        <div className={style.wrapper}>
            <div className={style.title_box}>
                <Tag tag={findPath.tag} size={52} />
                <h1 className={style.title}>{findPath.title}</h1>
            </div>
            <MDXComponet components={CustomMDX} />
        </div>
    );
}

export default BlogPosting;
