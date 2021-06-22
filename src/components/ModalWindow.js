import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalWindow(props) {
    const { booleanValue, toggleBoolean, character } = props.modalValues


    const handleClick = () => {
        console.log(`inside handle Click in Modal`)
        toggleBoolean(false)
    }

    return (
        <>
            <Modal className="d-flex justify-content-center align-items-center" show={booleanValue} onHide={() => toggleBoolean(false)} animation={false}>
                <Modal.Body>
                    <p><b>Year of birth:</b> {character.birth_year}</p>
                    <p><b>Gender:</b> {character.gender}</p>
                    <p><b>Height:</b> {character.height}</p>
                    <p><b>Mass:</b> {character.mass}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => toggleBoolean(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow