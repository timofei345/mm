import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useService from "../../../../services/requests";
import InputField from "../../../inputField/InputField";

import { setJwtToken } from "../../../../store/actions/authActions";

import Eye from "../../../../assets/eye.png";

import "./signUp.scss";

function SignUP() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { POST_REG_USER } = useService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const formData = {
            username: name,
            password: password,
            confirm_password: confirmPassword,
        };

        POST_REG_USER(formData).then((res) => {
            dispatch(setJwtToken(res.jwt));
            navigate("/");
        });
    };

    return (
        <section className='signup'>
            <div className='signup_title'>
                <h1>Signup and start transfering</h1>
            </div>

            <div className='signup_buttons'>
                <button className='google'>Google</button>

                <button className='facebook'>Facebook</button>
            </div>

            <div className='signup_main'>
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
                    />

                    <InputField
                        label='Renter password'
                        type='password'
                        placeholder='Enter your password again'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        icon={Eye}
                    />
                    <button onClick={handleSubmit}>Create account</button>
                </form>
                <Link to='/signin' className='signup_create'>
                    Already have account?
                </Link>
            </div>
        </section>
    );
}

export default SignUP;
