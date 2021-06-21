import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

function CharacterProvider(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(
        (result) => {
            setCharacters(result)
        },
        (error) => {
          console.log(`error`, error)
        }
      )
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
