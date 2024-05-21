import * as postingContentsStyle from "../style/postingContents.css";
import notion from "@/api/notion";
import * as ListType from "@/components/posting/type/listType";

const getChildListFunc = async (ele: ListType.ListsType, type: string) => {
    const getNotion = await notion();

    const blockList = await getNotion?.blocks.children.list({
        block_id: ele.id,
    });

    const childList = blockList?.results.map((ele: any) => {
        return <li className={postingContentsStyle.li}>{ele[type].rich_text[0].plain_text}</li>;
    });

    return <ul className={postingContentsStyle.childUl}>{childList}</ul>;
};

async function Ul({ text }: { text: ListType.ListPropType }) {
    return (
        <ul className={postingContentsStyle.ul}>
            {text.lists.map((ele: ListType.ListsType) => (
                <>
                    <li className={postingContentsStyle.li}>{ele.text}</li>
                    {ele.has_children && getChildListFunc(ele, text.type)}
                </>
            ))}
        </ul>
    );
}

export const List = async ({ text }: { text: ListType.ListPropType }) => {
    return <Ul text={text} />;
};
