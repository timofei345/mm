import classNames from "classnames";
import "./transactionsCard.scss";

function TransactionsCard({ avatar, name, date, amount, type, trType, setIsOpen }) {
    const firstLetter = name ? name[0] : "A";
    const openModal = () => {
        setIsOpen(true)
    }
    return (
        <button onClick={openModal} className='transactions_card'>
            <div className='transactions_card-inner'>
                <div className='transactions_avatar'>
                    {avatar === "any" || !avatar ? (
                        <div className='transactions_avatar-letter'>
                            <p>{firstLetter.toUpperCase()}</p>
                        </div>
                    ) : (
                        <img src={avatar} alt='avatar' />
                    )}
                    {type ? (
                        <div
                            className={classNames("transactions_type", {
                                type_operation_down: type === "request",
                                type_operation_up: type === "send",
                            })}
                        >
                            <svg
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M4.91467 1.37533L0.840685 9.84699C0.669036 10.2039 0.744545 10.6071 1.03765 10.8992C1.33079 11.1914 1.78247 11.3135 2.21639 11.2181L5.64348 10.464V6.77206C5.64348 6.60218 5.8031 6.46443 6.00001 6.46443C6.1969 6.46443 6.35655 6.60216 6.35655 6.77206V10.464L9.78361 11.2181C10.2176 11.3135 10.6692 11.1914 10.9624 10.8992C11.2561 10.6065 11.3306 10.2033 11.1593 9.84697L7.08536 1.3753C6.89987 0.989593 6.48399 0.75 6.00001 0.75C5.51604 0.75 5.10013 0.989594 4.91467 1.37533Z' />
                            </svg>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className='transaction_info'>
                    <div className='transactions_name'>
                        <h3>{name}</h3>
                    </div>
                    <div className='transactions_date'>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
            <div className='transactions_amount'>
                <span>
                    {trType === "send" ? `- ${amount}$` : `+ ${amount}$`}
                </span>
            </div>
        </button>
    );
}

export default TransactionsCard;
