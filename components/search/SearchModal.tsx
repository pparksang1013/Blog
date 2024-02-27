import { FiSearch, FiXCircle } from "react-icons/fi";

// COMPONENT
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

// STYLE
import "../../style/search/search.css";

// LIB
import useSearchState from "@/lib/useSearchState";

interface Modalprop {
    setModal: (value: boolean) => void;
}

function SearchModal({ setModal }: Modalprop) {
    const [search, setSearch] = useSearchState("");

    return (
        <div className="search_modal-box">
            <form>
                <label htmlFor="search_input">
                    <FiSearch size={20} className="modal_search" />
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
            <SearchList search={search} setModal={setModal} />
        </div>
    );
}

export default SearchModal;
