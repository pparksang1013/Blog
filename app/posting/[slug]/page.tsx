import BlogPosting from "@/components/page/posting/Index";
import "@/style/codeHighlight.css";

function page({ params }: { params: { slug: string } }) {
    return <BlogPosting params={params} />;
}

export default page;
