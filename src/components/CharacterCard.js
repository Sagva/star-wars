import styles from  "../styles/CharacterCard.module.css";

const CharacterCard = (props) => {
    const characters = props.characters.results

    return (
        <div className={`${styles.charCardList} d-flex flex-column flex-sm-row flex-sm-wrap flex-grow-1 align-items-start py-5 px-sm-5`}>
            {characters && characters.map((character, i) => (
                <div className={`${styles.charCard} mt-2 my-sm-2 mx-sm-2 align-self-sm-start`} key={i}>{character.name}</div>
            ))}
        </div>
    )
}

export default CharacterCard