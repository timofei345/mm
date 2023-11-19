import { Link } from "react-router-dom";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import "./resetPassword.scss";
import InputField from "../../../inputField/InputField";

function ResetPassword() {
    const handleSubmit = () => {};
    return (
        <section className='body_container'>
            <HeaderPrivate title='Reset Passwort' />
            <div className='get_back'>
                <Link to='/'>
                    <svg
                        width='16'
                        height='13'
                        viewBox='0 0 16 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M15 7.5C15.5523 7.5 16 7.05228 16 6.5C16 5.94772 15.5523 5.5 15 5.5V7.5ZM1 5.5C0.447715 5.5 0 5.94772 0 6.5C0 7.05228 0.447715 7.5 1 7.5V5.5ZM1.70711 5.79289C1.31658 5.40237 0.683417 5.40237 0.292893 5.79289C-0.0976311 6.18342 -0.0976311 6.81658 0.292893 7.20711L1.70711 5.79289ZM5.79289 12.7071C6.18342 13.0976 6.81658 13.0976 7.20711 12.7071C7.59763 12.3166 7.59763 11.6834 7.20711 11.2929L5.79289 12.7071ZM0.292893 5.79289C-0.0976311 6.18342 -0.0976311 6.81658 0.292893 7.20711C0.683417 7.59763 1.31658 7.59763 1.70711 7.20711L0.292893 5.79289ZM7.20711 1.70711C7.59763 1.31658 7.59763 0.683417 7.20711 0.292893C6.81658 -0.0976311 6.18342 -0.0976311 5.79289 0.292893L7.20711 1.70711ZM15 5.5H1V7.5H15V5.5ZM0.292893 7.20711L5.79289 12.7071L7.20711 11.2929L1.70711 5.79289L0.292893 7.20711ZM1.70711 7.20711L7.20711 1.70711L5.79289 0.292893L0.292893 5.79289L1.70711 7.20711Z'
                            fill='black'
                        />
                    </svg>
                </Link>
            </div>
            <div className='resetpassword_text'>
                <h3>
                    Enter your email to send instructions to reset your password
                </h3>
            </div>
            <InputField
                label='Email'
                placeholder='Enter your email'
                className='resetpassword_input'
            />

            <div className='sendall_btn detail_btn'>
                <button className='detail_send' onClick={handleSubmit}>
                    Send Email
                </button>
            </div>
        </section>
    );
}

export default ResetPassword;
