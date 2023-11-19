import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import "./sendMoney.scss";
import useService from "../../../../services/requests";

import "react-responsive-modal/styles.css";
import ModalSuccess from "../../../modal/Modal";
import { SendTransactions } from "../../../../utils/sendTransactions";

function SendMoney() {
   
    const [open, setOpen] = useState(false);

    const [amount, setAmount] = useState();
    const [note, setNote] = useState("");
    const [amountError, setAmountError] = useState(false);
    const { state } = useLocation();
    const { POST_TRANSACTIONS } = useService();
    const firstLetter = state.info.username.charAt(0).toUpperCase();

    const handleSubmit = () => {
        if (!amount) {
            setAmountError(true);
            return;
        }
        const date = {
            amount,
            username: state.info.username,
            avatar: state.info.avatar,
            type: "send",
        };
        const result = SendTransactions(date);
        POST_TRANSACTIONS(result).then((res) => {
            setOpen(true);

        
        });
    };
    return (
        <section className='body_container sendm'>
          

            <ModalSuccess open={open} onClose={() => setOpen(false)} />
            <HeaderPrivate title='Send Money' />
            <div className='get_back'>
                <svg
                    width='16'
                    height='13'
                    viewBox='0 0 16 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M15 7.5C15.5523 7.5 16 7.05228 16 6.5C16 5.94772 15.5523 5.5 15 5.5V7.5ZM1 5.5C0.447715 5.5 0 5.94772 0 6.5C0 7.05228 0.447715 7.5 1 7.5V5.5ZM1.70711 5.79289C1.31658 5.40237 0.683417 5.40237 0.292893 5.79289C-0.0976311 6.18342 -0.0976311 6.81658 0.292893 7.20711L1.70711 5.79289ZM5.79289 12.7071C6.18342 13.0976 6.81658 13.0976 7.20711 12.7071C7.59763 12.3166 7.59763 11.6834 7.20711 11.2929L5.79289 12.7071ZM0.292893 5.79289C-0.0976311 6.18342 -0.0976311 6.81658 0.292893 7.20711C0.683417 7.59763 1.31658 7.59763 1.70711 7.20711L0.292893 5.79289ZM7.20711 1.70711C7.59763 1.31658 7.59763 0.683417 7.20711 0.292893C6.81658 -0.0976311 6.18342 -0.0976311 5.79289 0.292893L7.20711 1.70711ZM15 5.5H1V7.5H15V5.5ZM0.292893 7.20711L5.79289 12.7071L7.20711 11.2929L1.70711 5.79289L0.292893 7.20711ZM1.70711 7.20711L7.20711 1.70711L5.79289 0.292893L0.292893 5.79289L1.70711 7.20711Z'
                        fill='black'
                    />
                </svg>
            </div>
            <div className='detail_card-info'>
                <div className='detail_card_avatar'>
                    {state.info.avatar ? (
                        <img src={state.info.avatar} alt='avatar' />
                    ) : (
                        <div className='transactions_avatar-letter'>
                            <p>{firstLetter}</p>
                        </div>
                    )}
                </div>
                <div className='transaction_info'>
                    <div className='transactions_name'>
                        <h3>{state.info.username}</h3>
                    </div>
                    <div className='transactions_date'>
                        <p>{state.info.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='detail_form'>
                <div className='detail_input'>
                    <label>Payment Amount</label>
                    {amountError && (
                        <small style={{ color: "red" }}>
                            Please enter a payment amount
                        </small>
                    )}
                    <input
                        type='number'
                        placeholder='Enter a payment amount'
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        value={amount}
                    />
                </div>
                <div className='detail_input'>
                    <label>Payment Note</label>
                    <textarea
                        type='text'
                        placeholder='Enter a payment note'
                        onChange={(e) => {
                            setNote(e.target.value);
                        }}
                        value={note}
                    ></textarea>
                </div>
            </div>
            <div className='sendall_btn detail_btn'>
                <button className='detail_send' onClick={handleSubmit}>
                    <svg
                        width='13'
                        height='13'
                        viewBox='0 0 13 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M5.23378 1.10455L0.480799 10.9882C0.280542 11.4045 0.368636 11.8749 0.710587 12.2158C1.05259 12.5566 1.57955 12.6991 2.08579 12.5877L6.08406 11.708V7.40074C6.08406 7.20254 6.27028 7.04183 6.50002 7.04183C6.72972 7.04183 6.91597 7.20252 6.91597 7.40074V11.708L10.9142 12.5877C11.4205 12.6991 11.9474 12.5566 12.2894 12.2158C12.6321 11.8742 12.7191 11.4038 12.5192 10.9881L7.76625 1.10452C7.54985 0.654525 7.06466 0.375 6.50002 0.375C5.93537 0.375 5.45015 0.654525 5.23378 1.10455Z'
                            fill='#1A1A1A'
                        />
                    </svg>
                    Send Payment
                </button>
            </div>
        </section>
    );
}
export default SendMoney;
