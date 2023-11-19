import { Link, useLocation} from "react-router-dom";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import "./send.scss";
import { useState } from "react";

function Send() {
    const [transactionType] = useState("incomes");
    const { state } = useLocation();


    const sortedTransactions = [...state.sendPerson].sort((a, b) => {
        const dateA = new Date(a.trDate.split(".").reverse().join("-"));
        const dateB = new Date(b.trDate.split(".").reverse().join("-"));

        return dateB - dateA; // Sorting in descending order, change to dateA - dateB for ascending
    });

    const filteredTransactions = sortedTransactions.filter((item) => {
        return transactionType === "incomes"
            ? item.trType === "send"
            : item.trType === "request";
    });

    const transactionsByMonth = filteredTransactions.reduce(
        (acc, transaction) => {
            const monthYear = transaction.trDate.split(".").slice(1).join("-");
            acc[monthYear] = acc[monthYear] || [];
            acc[monthYear].push(transaction);
            return acc;
        },
        {}
    );
    return (
        <div className='body_container'>
            <HeaderPrivate title='Send Money' />
            <div className='get_back'>
                <Link to='/'>
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
                </Link>
            </div>
            <div className='total_send'>
                <h3>
                    Total Amount: <span>$158</span>
                </h3>
            </div>
            <div className='sendm_main'>
                {Object.entries(transactionsByMonth).map(
                    ([monthYear, monthTransactions]) => (
                        <div key={monthYear} className='month-section'>
                            <h3>
                                {new Date(
                                    monthYear.split("-")[1],
                                    monthYear.split("-")[0] - 1
                                ).toLocaleString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </h3>
                            {monthTransactions.map((item, index) => (
                                <ContactCard
                                    key={`${monthYear}-${index}`}
                                    username={item.userName}
                                    avatar={item.userAvatar}
                                    balance={item.amount}
                                />
                            ))}
                        </div>
                    )
                )}
            </div>
            <div className='sendall_btn'>
                <Link>
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M4.91467 1.37533L0.840685 9.84699C0.669036 10.2039 0.744545 10.6071 1.03765 10.8992C1.33079 11.1914 1.78247 11.3135 2.21639 11.2181L5.64348 10.464V6.77206C5.64348 6.60218 5.8031 6.46443 6.00001 6.46443C6.1969 6.46443 6.35655 6.60216 6.35655 6.77206V10.464L9.78361 11.2181C10.2176 11.3135 10.6692 11.1914 10.9624 10.8992C11.2561 10.6065 11.3306 10.2033 11.1593 9.84697L7.08536 1.3753C6.89987 0.989593 6.48399 0.75 6.00001 0.75C5.51604 0.75 5.10013 0.989594 4.91467 1.37533Z'
                            fill='#1A1A1A'
                        />
                    </svg>
                    Send all payments
                </Link>
            </div>
        </div>
    );
}

function ContactCard({ avatar, username, balance }) {
    return (
        <div className='transactions_card'>
            <div className='transactions_card-inner'>
                <div className='transactions_avatar'>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='transaction_info'>
                    <div className='transactions_name'>
                        <h3>{username}</h3>
                    </div>
                    <div className='transactions_date'>
                        <p>-${balance}</p>
                    </div>
                </div>
            </div>
            <div className='send_btn'>
                <Link
                    className='contact_request'
                    to='/sendmoney'
                    state={{ info: { avatar, username, balance } }}
                >
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M4.91467 1.37533L0.840685 9.84699C0.669036 10.2039 0.744545 10.6071 1.03765 10.8992C1.33079 11.1914 1.78247 11.3135 2.21639 11.2181L5.64348 10.464V6.77206C5.64348 6.60218 5.8031 6.46443 6.00001 6.46443C6.1969 6.46443 6.35655 6.60216 6.35655 6.77206V10.464L9.78361 11.2181C10.2176 11.3135 10.6692 11.1914 10.9624 10.8992C11.2561 10.6065 11.3306 10.2033 11.1593 9.84697L7.08536 1.3753C6.89987 0.989593 6.48399 0.75 6.00001 0.75C5.51604 0.75 5.10013 0.989594 4.91467 1.37533Z'
                            fill='#1A1A1A'
                        />
                    </svg>
                    Send
                </Link>
            </div>
        </div>
    );
}

export default Send;
