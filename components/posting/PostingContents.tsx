import useNotionStore from "@/store/notionStore";
import { contentsParsing } from "./child";
import * as postingContentsStyle from "./style/postingContents.css";

export const PostingContents = ({ title }: { title?: string }) => {
    const groupedContents = useNotionStore.getState().block.results.reduce((acc: any, ele: any) => {
        if (ele.type === "bulleted_list_item" || ele.type === "numbered_list_item") {
            const listGroup = acc[acc.length - 1];

            if (listGroup && listGroup.type === ele.type) {
                listGroup.lists.push({
                    text: ele[ele.type].rich_text[0].plain_text,
                    has_children: ele.has_children,
                    id: ele.id,
                    [ele.type]: ele[ele.type],
                });
            } else {
                acc.push({
                    type: ele.type,
                    lists: [
                        {
                            text: ele[ele.type].rich_text[0].plain_text,
                            has_children: ele.has_children,
                            id: ele.id,
                            [ele.type]: ele[ele.type],
                        },
                    ],
                });
            }
        } else {
            acc.push(ele);
        }
        return acc;
    }, []);

    const contents = groupedContents.map((ele: any, i: number) => {
        switch (ele.type) {
            case "paragraph":
                return <contentsParsing.Paragraph text={ele.paragraph} />;
            case "heading_1":
                return <contentsParsing.H1 text={ele.heading_1} />;
            case "heading_2":
                return <contentsParsing.H2 text={ele.heading_2} />;
            case "heading_3":
                return <contentsParsing.H2 text={ele.heading_3} />;
            case "bulleted_list_item":
            case "numbered_list_item": {
                return <contentsParsing.List text={ele} />;
            }
            default:
                null;
        }
    });

    return (
        <>
            <h1 className={postingContentsStyle.title}>{title}</h1>
            {contents}
        </>
    );
};
