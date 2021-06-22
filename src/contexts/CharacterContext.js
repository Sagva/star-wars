import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

function CharacterProvider(props) {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      let result = await fetch(`https://swapi.dev/api/people`)
      result = await result.json()
      setCharacters(result)
    } catch(error) {
      setCharacters(`Something went wrong: ${error}`)
    }
  }

  useEffect(() => {
    getCharacters()
  }, []);

 

  const values = {
    characters,
  };

  return (
    <CharacterContext.Provider value={values}>
      {props.children}
    </CharacterContext.Provider>
  );
}

export default CharacterProvider;
