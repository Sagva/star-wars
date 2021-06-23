import styles from "../styles/CharacterCard.module.css";
import { useState } from "react"
import ModalWindow from '../components/ModalWindow'

const CharacterCard = ({ character }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    let modalValues = {
        booleanValue: showModal,
        toggleBoolean: setShowModal,
        character: character,
        
    }

    return (
        <div className={`${styles.charCard} mt-1 mt-sm-2 my-sm-2 mx-sm-2 align-self-sm-start`} >
            <p onClick={()=>{handleClick()}}>{character.name}</p>
            <ModalWindow modalValues={modalValues}/>
        </div>
    )
}

export default CharacterCard