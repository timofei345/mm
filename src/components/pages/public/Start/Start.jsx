import React from "react";
import logo from "../../../../assets/logo.png";
import "./start.scss";
import { Link } from "react-router-dom";

function Start() {
    return (
        <section className='container'>
            <div className='top'>
                <img
                    src={logo}
                    alt='signinbackground'
                    className='singninbackground'
                />
                <p>
                    The best Way to <b>Transfer Money</b> Safety
                </p>
            </div>

            <div className='bot'>
                <Link to='/signup' className='btn_primary'>
                    Create new account
                </Link>
                <Link to='/signin' className='btn_outline'>
                    Already have account?
                </Link>
            </div>
        </section>
    );
}

export default Start;
