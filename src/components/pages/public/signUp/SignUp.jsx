import React, { useState } from "react";

import useService from "../../../../services/requests";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.scss";
import { setJwtToken } from "../../../../store/actions/authActions";
import { useDispatch } from "react-redux";

function SignUP() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { POST_REG_USER } = useService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDataChange = (e, setData) => {
        setData(e.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            username: name,
            password: password,
            confirm_password: confirmPassword,
        };
        POST_REG_USER(formData).then((res) => {
            console.log(res.jwt);
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
                    <div className='signup_input'>
                        <label>Email</label>
                        <input
                            placeholder='Enter your email'
                            type='text'
                            value={name}
                            onChange={(e) => {
                                handleDataChange(e, setName);
                            }}
                        />
                    </div>

                    <div className='signup_input'>
                        <label>Password</label>
                        <input
                            placeholder='Enter your password'
                            type='password'
                            value={password}
                            onChange={(e) => {
                                handleDataChange(e, setPassword);
                            }}
                        />
                    </div>

                    <div className='signup_input'>
                        <label>Renter password</label>
                        <input
                            placeholder='Enter your password again'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => {
                                handleDataChange(e, setConfirmPassword);
                            }}
                        />
                    </div>
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
