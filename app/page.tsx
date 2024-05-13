import { Root } from "@/components/root/Index";
import notion from "@/api/notion";
import "@/components/app/style/globalStyle.css";

async function Home() {
    await notion("databases-query");

    return (
        <>
            <Root />
        </>
    );
}

export default Home;
