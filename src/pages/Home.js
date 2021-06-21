import { useContext } from "react"
import { CharacterContext } from "../contexts/CharacterContext"
import CharacterCard from "../components/CharacterCard"

const Home = () => {
    const { characters } = useContext(CharacterContext)

    let content = ''

    if (characters) {
        content =
            <div>
                <CharacterCard characters={characters} />
            </div>
    }
    else {
        content = <div>Loading...</div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Home