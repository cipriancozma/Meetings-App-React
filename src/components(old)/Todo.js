import React, {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({title}) {
    const [showModal, setShowModal] = useState(false);

    function handleDelete() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            <div className={"actions"}>
                <button className={"btn"} onClick={handleDelete}>Delete</button>
            </div>
            {
                showModal && <Modal closeModal={handleCloseModal} />
            }
            {
                showModal && <Backdrop closeModal={handleCloseModal} />
            }
        </div>
    )
}


export default Todo;