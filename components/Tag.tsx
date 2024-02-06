import Image, { StaticImageData } from "next/image";

// IMAGE LINK
import programming from "../public/tag/programming.png";

interface tagType {
    tag: string;
    size: number;
}

function Tag(props: tagType) {
    const { tag, size } = props;

    const TAG_OBJ: Record<string, StaticImageData> = {
        programming,
    };

    return <Image src={TAG_OBJ[tag]} height={size} alt="tag" />;
}

export default Tag;
