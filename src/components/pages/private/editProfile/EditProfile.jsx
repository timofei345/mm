import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import InputField from "../../../inputField/InputField";

import { useImgBBUpload } from "../../../../hooks/http.hook";
import useService from "../../../../services/requests";

import "./editprofile.scss";

function EditProfile() {
    const [file, setFile] = useState();
    const [data, setData] = useState({});
    const { PUT_ME } = useService();
    const { uploadImage } = useImgBBUpload();

    const handleSubmit = () => {
        console.log(data);
        PUT_ME(data);
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        setFile(URL.createObjectURL(file));

        if (file) {
            try {
                const result = await uploadImage(file);
                setData({ ...data, avatar: result.data.display_url });
            } catch (error) {
                console.error("Error uploading image:", error.message);
            }
        }
    };

    return (
        <section className='body_container'>
            <HeaderPrivate title='Edit Profile' />
            <div className='get_back'>
                <Link to='/profile'>
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
            <div className='edit_profile'>
                <div className='edit_profile-avatar'>
                    {file ? (
                        <img src={file} alt='avatar' />
                    ) : (
                        <div className='edit_avatar-letter'>
                            <svg
                                width='27'
                                height='27'
                                viewBox='0 0 27 27'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1.80005 25.8C1.80005 11.4 25.8 11.4 25.8 25.8'
                                    stroke='black'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                />
                                <circle
                                    cx='13.8546'
                                    cy='7.20005'
                                    r='5.4'
                                    stroke='black'
                                    stroke-width='2'
                                />
                            </svg>
                        </div>
                    )}
                    <div className='edit_avatar_text'>
                        <h1>Upload Image</h1>
                        <input
                            type='file'
                            onChange={(event) => {
                                handleImageUpload(event);
                            }}
                        />
                    </div>
                </div>
                <InputField
                    label='User Name'
                    type='text'
                    placeholder='Enter your user name'
                    onChange={(e) => {
                        setData({ ...data, username: e.target.value });
                    }}
                />
                <InputField
                    label='Email'
                    type='email'
                    placeholder='Enter your email'
                />
                <InputField
                    label='Mobile Number'
                    type='number'
                    placeholder='Enter your mobile number'
                />
            </div>
            <div className='sendall_btn detail_btn'>
                <button className='detail_send' onClick={handleSubmit}>
                    Save changes
                </button>
            </div>
        </section>
    );
}
export default EditProfile;
