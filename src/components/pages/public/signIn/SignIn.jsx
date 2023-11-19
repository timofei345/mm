import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useService from "../../../../services/requests";

import InputField from "../../../inputField/InputField";

import { setJwtToken } from "../../../../store/actions/authActions";

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
                    <InputField
                        label='Email'
                        type='email'
                        placeholder='Enter your email'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputField
                        label='Password'
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={Eye}
                        className={"signin_password"}
                    />
                    <Link className='forget_password' to='/resetpassword'>
                        Forget password?
                    </Link>

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
