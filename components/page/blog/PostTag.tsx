import "/style/tag.css";

interface tagType {
    tag: string;
}

function PostTag(props: tagType) {
    const { tag } = props;

    return (
        <div className={`tag_box ${tag}`}>
            <p className={`tag_circle ${tag}`}></p>
            <p className={`tag_text ${tag}`}>{tag}</p>
        </div>
    );
}

export default PostTag;
