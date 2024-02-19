import Image, { StaticImageData } from "next/image";

// IMAGE LINK
import programming from "../public/tag/programming.png";
import project from "../public/tag/project.png";

interface tagType {
    tag: string;
    size: number;
}

function Tag(props: tagType) {
    const { tag, size } = props;

    const TAG_OBJ: Record<string, StaticImageData> = {
        programming,
        project,
    };

    return <Image src={TAG_OBJ[tag]} height={size} alt="tag" />;
}

export default Tag;
