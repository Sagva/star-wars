import React from "react"
import styles from  "../styles/CharacterList.module.css";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
    const characters = props.characters.results

    return (
        <div className={`${styles.charCardList} 
        d-flex flex-column flex-sm-row flex-sm-wrap flex-grow-1 align-items-start justify-content-sm-center pt-4 py-sm-5 px-sm-5`}>
            {characters && characters.map((character, i) => (
                <CharacterCard character={character}/>
            ))}
        </div>
    )
}

export default CharacterList