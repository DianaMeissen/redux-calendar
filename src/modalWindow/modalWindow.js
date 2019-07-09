import React from "react"

const ModalWindow = () => {
    return (
        <form onSubmit={event => console.log(event.target.modalInput)}>
            <input name="modalInput" />
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
        </form>
        
    )
}

export default ModalWindow;