import { useContext } from "react"
import { CharacterContext } from "../contexts/CharacterContext"
import CharacterCard from "../components/CharacterCard"
import styles from  "../styles/Home.module.css";

const Home = () => {
    const { characters } = useContext(CharacterContext)
    console.log(`characters`, characters)
    let content = ''

    if (characters && typeof characters !== 'string') {
        content =
            <div className={`${styles.contentWrapper} py-5 mt-sm-5`} >
                <div className='text-center'>
                    <h1 className='my-5'>Star wars characters</h1>
                </div>
                <CharacterCard characters={characters} />
            </div>
    }
    else {
        content = <div>{characters}</div>
    }

    return (
        <div className='container'>
            {content}
        </div>
    )
}

export default Home