import React from "react";
import ProfilePicture from "../../assets/profilepicture.png";
import NotificationsIcon from "../../assets/notificationsicon.svg";
import "./header.scss";

function Header({ date }) {
    console.log(date);
    return (
        <div className='header_dashboard'>
            <div className='header_top'>
                <div className='header_name'>
                    <p>Dashboard</p>
                </div>

                <div className='profile_picture'>
                    <img src={ProfilePicture} alt='profile_picture' />
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
