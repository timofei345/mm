import { useState } from "react";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import CardForm from "./cardForm";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";

import CardImg from "../../../../assets/Card 02.svg";
import RemoveImg from "../../../../assets/remove.png";

import "./card.scss";

function Cards() {
    const [open, setOpen] = useState(false);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };
    return (
        <section className='body_container cards'>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <div className='modal_main'>
                    <div className='modal_image'>
                        <img src={RemoveImg} alt='send' />
                    </div>
                    <div className='modal_content'>
                        <h3>Are you sure to remove this card?!</h3>
                        <div className='modal_btn'>
                            <button onClick={() => setOpen(false)}>
                                Cancel
                            </button>
                            <Link to='/cards' onClick={() => setOpen(false)}>
                                Remove
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
            <HeaderPrivate title='My Cards' />
            <Link to='/profile' className='get_back'>
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
            <Link to='/addcard' className='add_card'>
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M8 1.5V14.5'
                        stroke='#1A87DD'
                        stroke-width='2'
                        stroke-linecap='round'
                    />
                    <path
                        d='M1.5 8H14.5'
                        stroke='#1A87DD'
                        stroke-width='2'
                        stroke-linecap='round'
                    />
                </svg>
            </Link>

            <div className='card_block'>
                <Slider {...settings}>
                    <div>
                        <img src={CardImg} alt='' />
                    </div>
                    <div>
                        <img src={CardImg} alt='' />
                    </div>
                    <div>
                        <img src={CardImg} alt='' />
                    </div>
                </Slider>
            </div>
            <CardForm />
            <div className='sendall_btn detail_btn'>
                <button className='detail_send' onClick={() => {}}>
                    Save Changes
                </button>
                <button onClick={() => setOpen(true)} className='card_delete'>
                    <svg
                        width='15'
                        height='18'
                        viewBox='0 0 15 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M6.75 1.5C6.336 1.5 6 1.836 6 2.25V3H9V2.25C9 1.836 8.664 1.5 8.25 1.5H6.75ZM10.5 3V2.25C10.5 1.00725 9.49275 0 8.25 0H6.75C5.50725 0 4.5 1.00725 4.5 2.25V3H0.75C0.336 3 0 3.336 0 3.75C0 4.164 0.336 4.5 0.75 4.5H0.82875L2.106 15.9983C2.23275 17.1383 3.19575 18 4.3425 18H10.6575C11.8043 18 12.7673 17.1383 12.8933 15.9983L14.1713 4.5H14.25C14.664 4.5 15 4.164 15 3.75C15 3.336 14.664 3 14.25 3H10.5ZM12.6623 4.5H2.33775L3.597 15.8325C3.63975 16.2128 3.96075 16.5 4.3425 16.5H10.6575C11.0392 16.5 11.3603 16.2128 11.403 15.8325L12.6623 4.5ZM6 6.75C6.414 6.75 6.75 7.086 6.75 7.5V13.5C6.75 13.914 6.414 14.25 6 14.25C5.586 14.25 5.25 13.914 5.25 13.5V7.5C5.25 7.086 5.586 6.75 6 6.75ZM9 6.75C9.414 6.75 9.75 7.086 9.75 7.5V13.5C9.75 13.914 9.414 14.25 9 14.25C8.586 14.25 8.25 13.914 8.25 13.5V7.5C8.25 7.086 8.586 6.75 9 6.75Z'
                            fill='white'
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Cards;
