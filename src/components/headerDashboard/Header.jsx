import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NotificationsIcon from "../../assets/notificationsicon.svg";

import "react-toastify/dist/ReactToastify.css";
import "./header.scss";

function Header({ date, notifyData, checkNotify }) {
    const firstLetter = date.name ? date.name[0] : "A";


    return (
        <div className='header_dashboard'>
            <ToastContainer
                position='bottom-center'
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
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

                <Link
                    onClick={checkNotify}
                    to={notifyData.length > 0 ? "/notify" : "/"}
                    className='notifications_icon'
                    state={{ notifyData }}
                >
                    <img src={NotificationsIcon} alt='notifications_icon' />
                </Link>
            </div>
        </div>
    );
}
export default Header;
