import useNotionStore from "@/store/notionStore";
import notion from "@/api/notion";
import { NotionDatabaseType } from "@/type/notionDatabaseType";
import "@/components/app/style/globalStyle.css";
import { Posting } from "@/components/posting/Index";

export async function generateStaticParams() {
    await notion("databases-query");
    return useNotionStore.getState().database.map((ele: NotionDatabaseType) => {
        {
            ele.id;
        }
    });
}

function page({ params }: { params: { slug: string } }) {
    return <Posting params={params} />;
}

export default page;
