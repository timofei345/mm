import { Link } from "react-router-dom";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import "./request.scss";

function Request() {
    const contacts = [
        {
            avatar: "https://i.pravatar.cc/300",
            name: "John Smith",
            email: "john.smith@example.com",
        },
        {
            avatar: "https://i.pravatar.cc/300",
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
        },
        {
            avatar: "https://i.pravatar.cc/300",
            name: "Bob Williams",
            email: "bob.williams@example.com",
        },
        {
            avatar: "https://i.pravatar.cc/300",
            name: "Sarah Davis",
            email: "sarah.davis@example.com",
        },
        {
            avatar: "https://i.pravatar.cc/300",
            name: "Michael Brown",
            email: "michael.brown@example.com",
        },
        {
            avatar: "https://i.pravatar.cc/300",
            name: "Linda Miller",
            email: "linda.miller@example.com",
        },
        {
            avatar: "https://i.pravatar.cc/300",
            name: "David Wilson",
            email: "david.wilson@example.com",
        },
    ];
    return (
        <div className='body_container'>
            <HeaderPrivate title='Request Money' />
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
                {contacts.map((item, index) => {
                    return (
                        <ContactCard
                            key={index}
                            name={item.name}
                            avatar={item.avatar}
                            email={item.email}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function ContactCard({ avatar, name, email }) {
    return (
        <div className='transactions_card'>
            <div className='transactions_card-inner'>
                <div className='transactions_avatar'>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='transaction_info'>
                    <div className='transactions_name'>
                        <h3>{name}</h3>
                    </div>
                    <div className='transactions_date'>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            <div className='request_btn'>
                <Link className='contact_request' to='/requestmoney'>
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M7.20596 11.1385L11.7326 1.72559C11.9233 1.32904 11.8394 0.88103 11.5138 0.556437C11.188 0.231843 10.6862 0.0960813 10.204 0.202175L6.39618 1.04001V5.14217C6.39618 5.33093 6.21882 5.48399 6.00003 5.48399C5.78126 5.48399 5.60387 5.33096 5.60387 5.14217V1.04001L1.79603 0.202175C1.31387 0.0960813 0.812005 0.23182 0.486311 0.556437C0.159984 0.881691 0.0771132 1.32974 0.267465 1.72561L4.79409 11.1386C5.00018 11.5671 5.46227 11.8334 6.00003 11.8334C6.53778 11.8334 6.9999 11.5671 7.20596 11.1385Z'
                            fill='white'
                        />
                    </svg>
                    Request
                </Link>
            </div>
        </div>
    );
}

export default Request;
