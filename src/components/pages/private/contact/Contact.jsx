import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import Navbar from "../../../navbar/Navbar";
import "./contact.scss";
import useService from "../../../../services/requests";

function Contact() {
    const [searchValue, setSearchValue] = useState("");
    const [contacts, setContacts] = useState([]);
    const { GET_USERS } = useService();

    useEffect(() => {
        GET_USERS().then((res) => {
            setContacts(res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setContacts]);

    const filteredContacts = contacts.filter((contact) => {
        const contactName = contact.username.toLowerCase();
        const search = searchValue.toLowerCase();
        return contactName.includes(search);
    });

    return (
        <section className='body_container'>
            <HeaderPrivate title='Contact' />
            <div className='transaction_top'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                >
                    <rect opacity='0.01' width='24' height='24' fill='white' />
                    <path
                        d='M12 5.5V18.5'
                        stroke='#1A87DD'
                        strokeWidth='2'
                        strokeLinecap='round'
                    />
                    <path
                        d='M5.5 12H18.5'
                        stroke='#1A87DD'
                        strokeWidth='2'
                        strokeLinecap='round'
                    />
                </svg>
            </div>
            <div className='contact_main'>
                <div className='contact_search'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                    >
                        <g opacity='0.3'>
                            <rect
                                opacity='0.01'
                                width='18'
                                height='18'
                                fill='white'
                            />
                            <circle
                                cx='8.625'
                                cy='8.625'
                                r='6.375'
                                stroke='black'
                                strokeWidth='2'
                            />
                            <path
                                d='M16.5 16.5L13.5 13.5'
                                stroke='black'
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                        </g>
                    </svg>
                    <input
                        type='text'
                        placeholder='Enter a name'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className='contact_body'>
                    {filteredContacts.map((item, index) => {
                        return (
                            <ContactCard
                                key={index}
                                username={item.username}
                                avatar={item.avatar}
                                fullName={item.fullName}
                            />
                        );
                    })}
                </div>
            </div>
            <Navbar active='Contacts' />
        </section>
    );
}
function ContactCard({ avatar, username, fullName }) {
    const firstLetter = username.charAt(0).toUpperCase();
    return (
        <div className='transactions_card'>
            <div className='transactions_card-inner'>
                <div className='transactions_avatar'>
                    {avatar ? (
                        <img src={avatar} alt='avatar' />
                    ) : (
                        <div className='transactions_avatar-letter'>
                            <p>{firstLetter}</p>
                        </div>
                    )}
                </div>
                <div className='transaction_info'>
                    <div className='transactions_name'>
                        <h3>{username}</h3>
                    </div>
                    <div className='transactions_date'>
                        <p>{fullName}</p>
                    </div>
                </div>
            </div>
            <div className='contact_btn'>
                <Link
                    className='contact_send'
                    to='/sendmoney'
                    state={{ info: { avatar, username, fullName } }}
                >
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M4.79404 0.861452L0.267387 10.2744C0.0766656 10.671 0.160565 11.119 0.486232 11.4436C0.811953 11.7682 1.31382 11.9039 1.79595 11.7978L5.60382 10.96V6.85783C5.60382 6.66907 5.78118 6.51601 5.99997 6.51601C6.21874 6.51601 6.39613 6.66904 6.39613 6.85783V10.96L10.204 11.7978C10.6861 11.9039 11.188 11.7682 11.5137 11.4436C11.84 11.1183 11.9229 10.6703 11.7325 10.2744L7.20591 0.861429C6.99982 0.432861 6.53773 0.166646 5.99997 0.166646C5.46222 0.166646 5.0001 0.432861 4.79404 0.861452Z'
                            fill='#1A1A1A'
                        />
                    </svg>
                </Link>
                <Link
                    className='contact_request'
                    to='/requestmoney'
                    state={{ info: { avatar, username, fullName } }}
                >
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
                </Link>
            </div>
        </div>
    );
}

export default Contact;
