import React from 'React';
import Modal from 'react-modal';
const OptionModal = (props) => {
    return (
        <div><p><Modal isOpen={!!props.selectedOption} 
        contentLabel={"Yonigger Modal"} 
        onRequestClose={props.clearSelectedOptions}
        closeTimeoutMS={200}
        className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearSelectedOptions}>Clear</button>
        </Modal></p>
        
        </div>

    );
};
export default OptionModal; 
