import useNotionStore from "@/store/notionStore";
import { contentsParsing } from "./child";

export const PostingContents = () => {
    const groupedContents = useNotionStore.getState().block.results.reduce((acc: any, ele: any) => {
        if (ele.type === "bulleted_list_item" || ele.type === "numbered_list_item") {
            const lastGroup = acc[acc.length - 1];
            if (lastGroup && lastGroup.type === ele.type) {
                lastGroup.lists.push(ele[ele.type].rich_text[0].plain_text);
            } else {
                acc.push({ type: ele.type, items: ele, lists: [ele[ele.type].rich_text[0].plain_text] });
            }
        } else {
            acc.push(ele);
        }
        return acc;
    }, []);

    const contents = groupedContents.map((ele: any) => {
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

    return <>{contents}</>;
};
