// STYLE
import { listStyle } from "@/app/style/(posting)/list.css";
// API
import { getBlockChildren } from "@/app/api/getBlockChildren";

const getChildListFunc = async (ele: any, type: string) => {
    const blockList = await getBlockChildren(ele.id);
    const childList = blockList?.results.map((ele: any) => {
        const richText = ele[ele.type]?.rich_text;
        const plainText = richText && richText.length > 0 ? richText[0].plain_text : "";
        return <li className={listStyle.li}>{plainText}</li>;
    });
    return <ul className={listStyle.childUl}>{childList}</ul>;
};

async function Ul({ text }: { text: any }) {
    return (
        <ul className={listStyle.ul}>
            {text.lists.map((ele: any) => (
                <>
                    <li className={listStyle.li}>{ele.text}</li>
                    {ele.has_children && getChildListFunc(ele, text.type)}
                </>
            ))}
        </ul>
    );
}

export const List = async ({ text }: { text: any }) => {
    return <Ul text={text} />;
};
