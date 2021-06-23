import { useContext } from "react"
import { CharacterContext } from "../contexts/CharacterContext"
import CharacterList from "../components/CharacterList"
import styles from  "../styles/Home.module.css";
import Pagination from '../components/Pagination'
import Search from "../components/Search";

const Home = () => {
    const { characters, pageTotal, currentPage, setCurrentPage } = useContext(CharacterContext)

    let paginationsValues = {
        activPage: currentPage,
        pageTotal: pageTotal,
        setCurrentPage: setCurrentPage
    }

    let content = ''

    if (characters && typeof characters !== 'string') {
        content =
            <div className={`${styles.contentWrapper} d-flex flex-column mt-3 mt-sm-5 py-4 py-sm-5 `} >
                <div className='text-center'>
                    <h1 className={`${styles.heading} my-sm-5`}>Star wars characters</h1>
                </div>
                <Search/>
                <CharacterList characters={characters} />
                <Pagination values={paginationsValues}/>
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