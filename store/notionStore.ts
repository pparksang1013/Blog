import { createStore } from "zustand/vanilla";
import { NotionDatabaseType } from "@/type/notionDatabaseType";

interface NotionStoreType {
    database: NotionDatabaseType[];
    block: any;
}

const useNotionStore = createStore<NotionStoreType>()(() => ({
    database: [],
    block: [],
}));

export default useNotionStore;
