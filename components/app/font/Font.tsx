"use client";

import { suit } from "./font";

export default function Fonts() {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-suit: ${suit.style.fontFamily};
                }
            `}</style>
        </>
    );
}
