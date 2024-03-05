import { FiSearch, FiXCircle } from "react-icons/fi";

// COMPONENT
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

// STYLE
import "../../style/search/search.css";

// LIB
import useSearchState from "@/lib/useSearchState";

// TYPE
import { IModal } from "@/type/search_type";

function SearchModal({ setModal }: IModal) {
    const [search, setSearch] = useSearchState("");

    return (
        <div className="search_modal-box">
            <form>
                <label htmlFor="search_input">
                    <FiSearch size={24} className="modal_search" />
                </label>
                <SearchInput setSearch={setSearch} />
                <FiXCircle
                    onClick={() => {
                        setModal(false);
                    }}
                    size={20}
                    className="modal_close"
                />
            </form>
            {search ? <SearchList search={search} setModal={setModal} /> : undefined}
        </div>
    );
}

export default SearchModal;
