// STYLE
import { listStyle } from "@/app/style/(posting)/list.css";
// API
import { getBlockChildren } from "@/app/api/getBlockChildren";
// TYPE
import { ListTypeInterface } from "@/app/types/list";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
// COMP
import StyledText from "./StyledText";

const ChildList = async ({ id }: { id: string }) => {
    const getChildList: ListBlockChildrenResponse = await getBlockChildren(id);

    return (
        <ul className={listStyle.childUl}>
            {getChildList.results.map((ele: any, idx: number) => {
                return (
                    <li className={listStyle.li} key={idx}>
                        {ele[ele.type].rich_text.map((text: any) => {
                            return (
                                <StyledText text={text.plain_text} annotations={text.annotations} style={listStyle} />
                            );
                        })}
                    </li>
                );
            })}
        </ul>
    );
};

async function Ul({ list, idx }: { list: ListTypeInterface; idx: number }) {
    return (
        <ul className={listStyle.ul} key={idx}>
            {list.grouped_list.map((ele, i) => {
                return (
                    <>
                        <li key={i} className={listStyle.li}>
                            {ele.bulleted_list_item.map((text) => {
                                return (
                                    <StyledText
                                        text={text.plain_text}
                                        annotations={text.annotations}
                                        style={listStyle}
                                    />
                                );
                            })}
                        </li>
                        {ele.has_children && <ChildList id={ele.id} />}
                    </>
                );
            })}
        </ul>
    );
}

export const List = async ({ list, type, idx }: { list: ListTypeInterface; type: string; idx: number }) => {
    if (type === "bulleted_list_item") {
        return <Ul list={list} idx={idx} />;
    }
};
