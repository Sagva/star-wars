import React from "react"
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ModalWindow(props) {
    const { booleanValue, toggleBoolean, character } = props.modalValues

    return (
        <>
            <Modal className="d-flex justify-content-center align-items-center" show={booleanValue} onHide={() => toggleBoolean(false)} animation={false}>
                <Modal.Body>
                    <button className='modalClose' onClick={() => toggleBoolean(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <p className='charName py-2 text-center'><b>{character.name}</b></p>
                    <p><b>Year of birth:</b> {character.birth_year}</p>
                    <p><b>Gender:</b> {character.gender}</p>
                    <p><b>Height:</b> {character.height}</p>
                    <p><b>Mass:</b> {character.mass}</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalWindow