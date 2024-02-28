// TYPE
import { ISearch } from "@/type/search_type";

function SearchInput({ setSearch }: ISearch) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setSearch) {
            setSearch(e.target.value);
        }
    };

    return <input type="text" name="search" id="search_input" onChange={handleChange} />;
}

export default SearchInput;
