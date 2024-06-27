// COMP
import { Box } from "../components/(common)/Box";
import BlogFeed from "@/app/components/(blog)/BlogFeed";

export const revalidate = 3600;

async function Page() {
    return (
        <Box styleValue="blogBox">
            <BlogFeed />
        </Box>
    );
}

export default Page;
