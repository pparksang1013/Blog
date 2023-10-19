interface tagType {
    tag: string;
}

function PostTag(props: tagType) {
    const { tag } = props;

    let tagColorBox: string | null = null;
    let tagCircle: string | null = null;

    const sortTag = () => {
        if (tag === "react") {
            return (
                <div>
                    <p>react</p>
                </div>
            );
        }
    };

    return sortTag();
}

export default PostTag;
