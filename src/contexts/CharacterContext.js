import React, { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

function CharacterProvider(props) {
  const [characters, setCharacters] = useState([]);

  //for pagination
  const [pageTotal, setPageTotal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerRequest = 10;

  //for search
  const [search, setSearch] = useState("");

  const countFilteredCharacters = async (userSearch) => {
    try {
      let result = await fetch(`https://swapi.dev/api/people/?search=${userSearch}`)
      result = await result.json()
      setPageTotal(Math.ceil(result.count / limitPerRequest))
    } catch {
      alert(`Can not get data, please try later`)
    }
  };

  const getCharacters = async (page, search) => {
    try {
      let result = await fetch(`https://swapi.dev/api/people/?page=${page}&search=${search}`)
      result = await result.json()
      setCharacters(result)
    } catch (error) {
      setCharacters(`Something went wrong: ${error}`)
    }
  };

  useEffect(() => {
    countFilteredCharacters(search)
    getCharacters(currentPage, search)
  }, [currentPage, search]);

  const values = {
    characters,
    pageTotal,
    currentPage,
    setCurrentPage,
    setSearch,
    countFilteredCharacters
  };

  return (
    <CharacterContext.Provider value={values}>
      {props.children}
    </CharacterContext.Provider>
  );
}

export default CharacterProvider;
