import Image from "next/image";
export const NotionImage = ({ image, idx }: { image: any; idx: number }) => {
    return <Image src={image.file.url} width={100} height={100} alt="i" key={idx} />;
};
