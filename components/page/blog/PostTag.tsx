import style from "./blog.module.css";

interface tagType {
    tag: string;
}

function PostTag(props: tagType) {
    const { tag } = props;

    let tagColorBox: string | null = null;
    let tagCircle: string | null = null;

    const sortTag = () => {
        if (tag === "react") {
            tagColorBox = style.react_box;
            tagCircle = style.react_circle;

            return (
                <div className={`${style.tag_box} ${tagColorBox}`}>
                    <p className={`${style.circle} ${tagCircle}`}></p>
                    <p className={style.tag_text}>react</p>
                </div>
            );
        }
    };

    return sortTag();
}

export default PostTag;
