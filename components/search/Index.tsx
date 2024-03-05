"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

// STYLE
import "../../style/search/search.css";

// COMPONENT
import SearchModal from "./SearchModal";

function Search() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <button
                className="search_button"
                onClick={() => {
                    setModal(true);
                }}
            >
                <FiSearch className="search_icon" size={24} />
            </button>

            {modal ? <SearchModal setModal={setModal} /> : undefined}
        </>
    );
}

export default Search;
