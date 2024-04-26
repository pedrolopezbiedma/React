import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    const actionBar = <Button primary onClick={handleModal}>Close Modal</Button>

    return (
        <div>
            <Button primary onClick={handleModal}>Open the Modal</Button>
           { showModal && ( 
                <Modal closeModal={handleModal} actionBar = {actionBar}>
                    Pretty lovely modal
                </Modal>
           )}
        </div>
    )
}

export default ModalPage