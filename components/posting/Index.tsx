import { allPosts, Post } from "@/.contentlayer/generated";

// COMP
import { PostingBox } from "./PostingBox";
import { PostingContents } from "./PostingContents";

export function generateStaticParams() {
    const staticPath = allPosts.map((post: Post) => {
        return post._raw.flattenedPath;
    });

    return staticPath;
}

export const PostingComp = ({ params }: { params: { slug: string } }) => {
    const postingObj = allPosts.find((post: Post) => {
        return params.slug === post._raw.sourceFileName.replace(".mdx", "");
    });

    if (!postingObj) {
        return;
    }

    return (
        <PostingBox>
            <PostingContents posting={postingObj} />
        </PostingBox>
    );
};
