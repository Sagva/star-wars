import { useContext } from "react"
import { CharacterContext } from "../contexts/CharacterContext"
import CharacterCard from "../components/CharacterCard"

const Home = () => {
    const { characters } = useContext(CharacterContext)
    console.log(`characters`, characters)
    let content = ''

    if (characters && typeof characters !== 'string') {
        content =
            <div>
                <CharacterCard characters={characters} />
            </div>
    }
    else {
        content = <div>{characters}</div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Home