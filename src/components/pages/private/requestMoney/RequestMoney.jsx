import { useLocation, useNavigate } from "react-router-dom";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import "./RequestMoney.scss";
import ModalSuccess from "../../../modal/Modal";
import { useState } from "react";
import useService from "../../../../services/requests";
import { SendTransactions } from "../../../../utils/sendTransactions";

function RequestMoney() {
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState();
    const [note, setNote] = useState("");
    const [amountError, setAmountError] = useState(false);
    const { state } = useLocation();
    const { POST_TRANSACTIONS } = useService();
    const navigate = useNavigate();
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
            type: "request",
        };
        const result = SendTransactions(date);
        POST_TRANSACTIONS(result).then((res) => {
            setOpen(true);
        });
    };
    return (
        <section className='body_container'>
            <ModalSuccess open={open} onClose={() => setOpen(false)} />

            <HeaderPrivate title='Request Money' />
            <button onClick={() => navigate(-1)} className='get_back'>
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
            </button>
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
                        <p>{state.info.email}</p>
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
                            d='M7.76622 11.8955L12.5192 2.01185C12.7195 1.59547 12.6314 1.12506 12.2894 0.784237C11.9474 0.443414 11.4204 0.300864 10.9142 0.412263L6.91594 1.29199V5.59926C6.91594 5.79746 6.72972 5.95817 6.49998 5.95817C6.27028 5.95817 6.08403 5.79748 6.08403 5.59926V1.29199L2.08579 0.412263C1.57952 0.300864 1.05256 0.44339 0.710584 0.784237C0.36794 1.12575 0.280927 1.59621 0.480796 2.01187L5.23375 11.8955C5.45015 12.3455 5.93534 12.625 6.49998 12.625C7.06463 12.625 7.54985 12.3455 7.76622 11.8955Z'
                            fill='white'
                        />
                    </svg>
                    Request Payment
                </button>
            </div>
        </section>
    );
}
export default RequestMoney;
