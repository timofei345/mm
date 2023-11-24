import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../navbar/Navbar";

import useService from "../../../../services/requests";

import Profiles from "../../../../assets/profile_profile.svg";
import Card from "../../../../assets/profile_card.svg";
import Setting from "../../../../assets/profile_setting.svg";
import Help from "../../../../assets/profile_help.svg";

import "./profile.scss";

function Profile() {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const { GET_ME } = useService();

    useEffect(() => {
        GET_ME().then((res) => {
            setAvatar(res.avatar);
            setName(res.username);
            // setFirstLetter(res.username[0]);
        });
    }, []);
    const firstLetter = name ? name[0] : "A";
    const profileItem = [
        {
            img: <Profiles />,
            title: "My Info",
        },
        {
            img: <Card />,
            title: "My Cards",
            path: "/cards",
        },
        {
            img: <Setting />,
            title: "Settings",
            path: "/setting",
        },
        {
            img: <Help />,
            title: "Help",
        },
    ];
    const data ={
        name: name,
        avatar: avatar
    }
    return (
        <section className='profile'>
            <div className='profile_header'>
                <div className='profile_top'>
                    <h3>My Profile</h3>
                    <Link to='/editprofile' className='profile_edit' state={{data}}
                    >
                        <svg
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M12.5903 1.90089L11.8832 1.19379L11.8832 1.19379L12.5903 1.90089ZM16.0536 5.40936L16.7514 6.12559L16.7514 6.12558L16.0536 5.40936ZM1.4933 12.9979L0.786193 12.2908L0.786171 12.2908L1.4933 12.9979ZM1 17H0C0 17.5523 0.447715 18 1 18L1 17ZM4.6484 16.5221L3.95054 15.8059L3.95053 15.8059L4.6484 16.5221ZM11.5317 4.37376L13.2974 2.60798L11.8832 1.19379L10.1175 2.95957L11.5317 4.37376ZM13.2974 2.60798C13.8695 2.03588 14.7971 2.03588 15.3692 2.60798L16.7834 1.19379C15.4303 -0.159384 13.2363 -0.159384 11.8832 1.19379L13.2974 2.60798ZM15.3692 2.60801C15.9466 3.18536 15.9405 4.12331 15.3557 4.69313L16.7514 6.12558C18.1346 4.77785 18.1491 2.55936 16.7834 1.19376L15.3692 2.60801ZM15.3557 4.69312L13.6354 6.36923L15.0312 7.8017L16.7514 6.12559L15.3557 4.69312ZM10.1175 2.95955L0.786193 12.2908L2.2004 13.705L11.5317 4.37377L10.1175 2.95955ZM0.786171 12.2908C0.282788 12.7942 0 13.4769 0 14.1889H2C2 14.0073 2.07209 13.8333 2.20042 13.705L0.786171 12.2908ZM0 14.1889V17H2V14.1889H0ZM1 18H3.47305V16H1V18ZM3.47305 18C4.17282 18 4.84499 17.7268 5.34627 17.2383L3.95053 15.8059C3.82281 15.9303 3.6515 16 3.47305 16V18ZM5.34627 17.2383L15.0312 7.80169L13.6354 6.36924L3.95054 15.8059L5.34627 17.2383ZM10.1267 4.38289L13.6354 7.80169L15.0312 6.36924L11.5225 2.95044L10.1267 4.38289Z'
                                fill='#1A87DD'
                            />
                        </svg>
                    </Link>
                </div>
                <div className='profile_name'>
                    <div className='profile_img'>
                        {avatar === "any" || !avatar ? (
                            <div className='transactions_avatar-letter'>
                                <p>{firstLetter.toUpperCase()}</p>
                            </div>
                        ) : (
                            <img src={avatar} alt='avatar' />
                        )}
                    </div>
                    <h1>{name}</h1>
                </div>
            </div>
            <div className='profile_body'>
                {profileItem.map((item, index) => {
                    return (
                        <Link
                            to={item.path}
                            key={index}
                            className='profile_item'
                        >
                            <div className='pritem_info'>
                                <img src={item.img.type} alt='' />
                                <h3>{item.title}</h3>
                            </div>
                            <div className='profile_link'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                >
                                    <g opacity='0.01'>
                                        <rect
                                            width='24'
                                            height='24'
                                            fill='#F7F9FC'
                                        />
                                    </g>
                                    <path
                                        d='M9.21967 16.2197C8.92678 16.5126 8.92678 16.9874 9.21967 17.2803C9.51256 17.5732 9.98744 17.5732 10.2803 17.2803L15.2803 12.2803C15.5732 11.9874 15.5732 11.5126 15.2803 11.2197L10.2803 6.21967C9.98744 5.92678 9.51256 5.92678 9.21967 6.21967C8.92678 6.51256 8.92678 6.98744 9.21967 7.28033L13.6893 11.75L9.21967 16.2197Z'
                                        fill='black'
                                    />
                                </svg>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <Navbar active='Profile' />
        </section>
    );
}

export default Profile;
