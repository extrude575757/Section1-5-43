import React from 'React';
import Modal from 'react-modal';
const OptionModal = (props) => {
    return (
        <div><p><Modal isOpen={!!props.selectedOption} 
        contentLabel={"Yonigger Modal"} 
        onRequestClose={props.clearSelectedOptions}
        ><p>I'm a yoniggerin'</p>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearSelectedOptions}>Clear</button>
        </Modal>helloModal</p>
        
        </div>

    );
};
export default OptionModal; 
