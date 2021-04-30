import React, { useState } from 'react';
import './Popup.css';

const Popup = (props) => {
    const [close, setClose] = useState(false);

    const closePopup = () => {
        setClose(true);
        //document.getElementById("modal").classList.add("close-modal");
        if(props.clearPopupState){
            props.clearPopupState();
        }
    }

    let successErrorPopup = close === true ? null : (
        <div id="modal" className="modal-container">
            <div className="modal-wrap modal-wrap-mobile">
                <a href="#" className="modal-close" onClick={closePopup}> &times;</a>
                <div>{props.children}</div>
            </div>
        </div>
    );

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target.id == "modal") {
            closePopup();
        }
    }

    return(
        <React.Fragment>
            {successErrorPopup}
        </React.Fragment>
    )
}

export default Popup;