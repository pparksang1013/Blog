import { styles } from "./style/mainIntroStyle.css";
import Image from "next/image";
import img from "../../public/img/main_img.png";

export const MainIntro = () => {
    return (
        <div className={styles.box}>
            <Image src={img} alt="main_img" height={150} />
        </div>
    );
};
