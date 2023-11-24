import { Modal } from "react-responsive-modal";
import "./transactionsModal.scss"
import { transaction } from "mobx";


function TransactionsModal ({ open, onClose, data }) {
    return (
        <Modal open={open}
         onClose={onClose} 
         center
         classNames={{
            modal:"transactionModal_container"
         }}>
            <div className='transactionModal'>
                <div className="transactionModal_top">
                    <img src={data.userAvatar} alt="avatar" />
                    <h1>{data.userName}</h1>
                </div>
                <div className="transactionModal_main">
                    <ul>
                        <li>Amount: {data.amount}</li>
                        <li>Date: {data.trDate} </li>
                        <li>Operation type: {data.trType}</li>
                    </ul>
                </div>
               
            </div>
        </Modal>
    );
}
export default TransactionsModal;