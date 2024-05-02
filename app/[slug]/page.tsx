import { PostingPage } from "@/page/PostingPage";
import "../../components/app/style/globalStyle.css";

function page({ params }: { params: { slug: string } }) {
    return <PostingPage params={params} />;
}

export default page;
