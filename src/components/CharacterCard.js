
const CharacterCard = (props) => {
    const characters = props.characters.results

    return (
        <div>
            {characters && characters.map((character, i) => (
                <div key={i}>{character.name}</div>
            ))}
        </div>
    )
}

export default CharacterCard