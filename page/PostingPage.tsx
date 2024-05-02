import { PostingComp } from "@/components/posting/Index";

export const PostingPage = ({ params }: { params: { slug: string } }) => {
    return <PostingComp params={params} />;
};
