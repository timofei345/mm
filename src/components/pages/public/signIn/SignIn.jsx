import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { setJwtToken } from "../../../../store/actions/authActions";
import useService from "../../../../services/requests";

import Eye from "../../../../assets/eye.png";

import "./signIn.scss";

function SignIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const { POST_LOGIN_USER } = useService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const formData = {
            username: name,
            password: password,
        };
        POST_LOGIN_USER(formData).then((res) => {
            dispatch(setJwtToken(res.token));
            navigate("/");
        });
    };

    return (
        <section className='signin'>
            <div className='signin_title'>
                <h1>Login and start transfering</h1>
            </div>

            <div className='signin_buttons'>
                <button className='google'>Google</button>

                <button className='facebook'>Facebook</button>
            </div>

            <div className='signin_main'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className='signin_input'>
                        <label>Email</label>

                        <input
                            placeholder='Enter your email'
                            type='text'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>

                    <div className='signin_input'>
                        <label>Password</label>
                        <input
                            placeholder='Enter your password'
                            type='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <img src={Eye} alt='eye' />
                        <a href='javascript();'>Forget password?</a>
                    </div>

                    <button onClick={handleSubmit}>Login</button>
                </form>

                <Link to='/signup' className='signin_create'>
                    Create new account
                </Link>
            </div>
        </section>
    );
}

export default SignIn;
