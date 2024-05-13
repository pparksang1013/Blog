import { createStore } from "zustand/vanilla";
import { NotionDatabaseType } from "@/type/notionDatabaseType";

interface NotionStoreInterface {
    database: NotionDatabaseType[];
    block: any;
}

const useNotionStore = createStore<NotionStoreInterface>()(() => ({
    database: [],
    block: [],
}));

export default useNotionStore;
