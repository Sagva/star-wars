import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

function CharacterProvider(props) {
  const [characters, setCharacters] = useState([]);

  //for pagination
  const [pageTotal, setPageTotal] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const countPageTotal = (totalRecords) => {
    let pageTotal = Math.ceil(totalRecords / 10)
    setPageTotal(pageTotal)
  }

  const getCharacters = async (page) => {
    try {
      let result = await fetch(`https://swapi.dev/api/people/?page=${page}`)
      result = await result.json()
      setCharacters(result)
      countPageTotal(result.count)
    } catch (error) {
      setCharacters(`Something went wrong: ${error}`)
    }
  }

  useEffect(() => {
    getCharacters(currentPage)
  }, [currentPage]);



  const values = {
    characters,
    pageTotal,
    currentPage,
    setCurrentPage
  };

  return (
    <CharacterContext.Provider value={values}>
      {props.children}
    </CharacterContext.Provider>
  );
}

export default CharacterProvider;
