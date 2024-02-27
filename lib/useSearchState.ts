"use client";

import { useState } from "react";

export default function useSearchState(
    initialState: string | undefined
): [string | undefined, (value: string | undefined) => void] {
    const [search, setSearch] = useState<string | undefined>(initialState);

    return [search, setSearch];
}
