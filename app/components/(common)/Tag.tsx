// STYLE
import { tagStyle } from "@/app/style/(common)/tag.css";

interface TagType {
    id: string;
    name: string;
    color: string;
}

export const Tag = ({ tags }: { tags: TagType[] }) => {
    const tag = tags.map((ele, i) => {
        let setColorTag;

        switch (ele.color) {
            case "brown":
                setColorTag = tagStyle.brownLi;
                break;
            case "orange":
                setColorTag = tagStyle.orangeLi;
                break;
            case "yellow":
                setColorTag = tagStyle.yellowLi;
                break;
            case "green":
                setColorTag = tagStyle.greenLi;
                break;
            case "blue":
                setColorTag = tagStyle.blueLi;
                break;
            case "purple":
                setColorTag = tagStyle.purpleLi;
                break;
            case "pink":
                setColorTag = tagStyle.pinkLi;
                break;
            case "red":
                setColorTag = tagStyle.redLi;
                break;
            case "default":
                setColorTag = tagStyle.defaultLi;
                break;
        }
        return (
            <li className={setColorTag} key={i}>
                {ele.name}
            </li>
        );
    });

    return <ul className={tagStyle.ul}>{tag}</ul>;
};
