import React from "react";

import NotificationsIcon from "../../assets/notificationsicon.svg";

import "./header.scss";

function Header({ date }) {
    const firstLetter = date.name ? date.name[0] : "A";
    return (
        <div className='header_dashboard'>
            <div className='header_top'>
                <div className='header_name'>
                    <p>Dashboard</p>
                </div>

                <div className='profile_picture'>
                    {date.avatar === "any" || !date.avatar ? (
                        <div className='transactions_avatar-letter'>
                            <p>{firstLetter.toUpperCase()}</p>
                        </div>
                    ) : (
                        <img src={date.avatar} alt='avatar' />
                    )}
                </div>
            </div>
            <div className='header_bot'>
                <div className='dashboard_text'>
                    <h6>Hi, {date.name}</h6>
                    <h3>Total Balance</h3>
                    <h1>${date.amount}</h1>
                </div>

                <div className='notifications_icon'>
                    <img src={NotificationsIcon} alt='notifications_icon' />
                </div>
            </div>
        </div>
    );
}
export default Header;
