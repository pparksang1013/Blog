import { notion } from "../../api/notion";

export async function getStaticProps() {
    const getDatabaseQuery = await notion.databases.query({
        database_id: process.env.NOTION_DB!,
    });
}

export const Root = () => {
    return <div>index</div>;
};
