function Modal({closeModal}) {
    return (
        <div className={"modal"}>
            <p>Are you sure?</p>
            <div className={"btns"}>
                <button className={"btn btn--alt"} onClick={closeModal}>Cancel</button>
                <button className={"btn"}>Confirm</button>
            </div>

        </div>
    )
}

export default Modal;