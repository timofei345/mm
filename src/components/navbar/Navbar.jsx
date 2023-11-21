import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Transaction from "../../assets/arrows_icon.svg";
import Contact from "../../assets/Icon.svg";
import Profile from "../../assets/profile.svg";
import Home from "../../assets/Shape.svg";
import "./navbar.scss";

function Navbar({ active }) {
    useEffect(() => {
        setActiveNavItem(active);
    }, [active]);
    const [activeNavItem, setActiveNavItem] = useState("Home"); 

    const navitem = [
        {
            img: <Home />,
            name: "Home",
            path: "/",
        },
        {
            img: <Transaction />,
            name: "Transactions",
            path: "/transactions",
        },
        {
            img: <Contact />,
            name: "Contacts",
            path: "/contact",
        },
        {
            img: <Profile />,
            name: "Profile",
            path: "/profile",
        },
    ];

    return (
        <div className='navbar_main'>
            <div className='navbar_inner'>
                {navitem.map((item, index) => {
                    return (
                        <NavbarBtn
                            key={index}
                            img={item.img.type}
                            name={item.name}
                            path={item.path}
                            activeNavItem={activeNavItem}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function NavbarBtn({ img, name, path, activeNavItem }) {
    const isActive = activeNavItem === name;

    return (
        <Link
            className={`nav_item ${isActive ? "nav_item_active" : ""}`}
            to={path}
        >
            <img src={img} alt='icon' />
            <h3>{name}</h3>
        </Link>
    );
}

export default Navbar;
