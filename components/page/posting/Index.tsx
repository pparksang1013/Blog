import { allPosts, Post } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import CustomMDX from "./CustomMDX";
import Tag from "../../Tag";

// 💅CSS
import style from "../../../style/posting/posting.module.css";

export function generateStaticParams() {
    const staticPath = allPosts.map((post: Post) => {
        return post._raw.flattenedPath;
    });

    return staticPath;
}

function BlogPosting({ params }: { params: { slug: string } }) {
    const findPath: any = allPosts.find((post: Post) => {
        const replacePath = post._raw.sourceFileName.replace(".mdx", "");
        return replacePath === params.slug;
    });

    const MDXComponet = useMDXComponent(findPath.body.code);

    return (
        <div className={style.wrapper}>
            <Tag tag={findPath.tag} size={40} />
            <h1 className={style.title}>{findPath.title}</h1>
            <MDXComponet components={CustomMDX} />
        </div>
    );
}

export default BlogPosting;
