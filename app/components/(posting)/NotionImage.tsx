import Image from "next/image";
export const NotionImage = ({ image }: { image: any }) => {
    console.log(image);

    return <Image src={image.file.url} width={100} height={100} alt="i" />;
};
