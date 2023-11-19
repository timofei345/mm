import { Modal } from "react-responsive-modal";
import SendModalIcon from "../../assets/send.svg";

function ModalSuccess({ open, onClose }) {
    return (
        <Modal open={open} onClose={onClose} center>
            <div className='modal_main'>
                <div className='modal_image'>
                    <img src={SendModalIcon} alt='send' />
                </div>
                <div className='modal_content'>
                    <h3>The amount has been requested successfully!</h3>
                    <button onClick={onClose}>Ok, Thanks!</button>
                </div>
            </div>
        </Modal>
    );
}
export default ModalSuccess;
