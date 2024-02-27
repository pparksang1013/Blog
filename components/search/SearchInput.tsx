interface SearchProps {
    setSearch: (value: string) => void;
}

function SearchInput({ setSearch }: SearchProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return <input type="text" name="search" id="search_input" onChange={handleChange} />;
}

export default SearchInput;
