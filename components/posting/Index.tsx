import { allPosts, Post } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

// COMP
import { PostingBox } from "./PostingBox";

export function generateStaticParams() {
    const staticPath = allPosts.map((post: Post) => {
        return post._raw.flattenedPath;
    });

    return staticPath;
}

export const PostingComp = ({ params }: { params: { slug: string } }) => {
    const postingPath = allPosts.find((post: Post) => {
        return params.slug === post._raw.sourceFileName.replace(".mdx", "");
    });

    if (!postingPath) {
        return;
    }

    const CustomMDX = useMDXComponent(postingPath.body.code);

    return (
        <PostingBox>
            <CustomMDX />
        </PostingBox>
    );
};
