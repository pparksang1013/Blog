import { TagType } from "@/type/notionDatabaseType";
import { tagsStyle } from "../style/tags.css";

export const Tags = ({ tags }: { tags: TagType[] }) => {
    const tag = tags.map((ele, i) => {
        let setColorTag;

        switch (ele.color) {
            case "brown":
                setColorTag = tagsStyle.brownLi;
                break;
            case "orange":
                setColorTag = tagsStyle.orangeLi;
                break;
            case "yellow":
                setColorTag = tagsStyle.yellowLi;
                break;
            case "green":
                setColorTag = tagsStyle.greenLi;
                break;
            case "blue":
                setColorTag = tagsStyle.blueLi;
                break;
            case "purple":
                setColorTag = tagsStyle.purpleLi;
                break;
            case "pink":
                setColorTag = tagsStyle.pinkLi;
                break;
            case "red":
                setColorTag = tagsStyle.redLi;
                break;
            case "default":
                setColorTag = tagsStyle.defaultLi;
                break;
        }
        return (
            <li className={setColorTag} key={i}>
                {ele.name}
            </li>
        );
    });

    return <ul className={tagsStyle.ul}>{tag}</ul>;
};
