import { useContext, useState } from "react";
import styles from "../styles/Search.module.css";
import { CharacterContext } from "../contexts/CharacterContext";

const Search = () => {
    const { setSearch, countFilteredCharacters, setCurrentPage } = useContext(CharacterContext);

    const [prepSearch, setPrepSearch] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1)
        countFilteredCharacters(prepSearch)
        setSearch(prepSearch)
    };

    return (

        <form onSubmit={handleSearchSubmit} >
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search for the characters based on their first or last name"
                onChange={(e) => setPrepSearch(e.target.value)}
            />
        </form>

    );
};

export default Search;
