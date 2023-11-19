import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Imgonboarding1 from "../../../../assets/imgonboarding1.svg";
import Imgonboarding2 from "../../../../assets/imgonboarding2.svg";
import Imgonboarding3 from "../../../../assets/imgonboarding3.svg";
import "./onboarding.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OnBoarding() {
    const [number, setNumber] = useState(1);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
            setNumber(current + 1);
        },
    };
    const checkedonboarding = () => {
        localStorage.setItem("onboarding", true);
    };
    return (
        <section className='onboarding'>
            <div className='navbar'>
                <div className='nav_left'>
                    <h5>{number}/3</h5>
                </div>
                {number !== 3 ? (
                    <div className='nav_right'>
                        <Link to='/signin' onClick={checkedonboarding}>
                            Skip
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <Slider {...settings} className='main_step'>
                <div className='step_item'>
                    <div className='step_img'>
                        <img src={Imgonboarding1} alt='onboardingimage1' />
                    </div>

                    <div className='step_content'>
                        <h1> Add all accounts & manage </h1>
                        <p>
                            You can add all accounts in one place and use it to
                            send and request.
                        </p>
                    </div>
                </div>
                <div className='step_item'>
                    <div className='step_img'>
                        <img src={Imgonboarding2} alt='onboardingimage1' />
                    </div>

                    <div className='step_content'>
                        <h1> Track yor activity </h1>
                        <p>
                            You can track your income, expenses activities and
                            all statistics.
                        </p>
                    </div>
                </div>
                <div className='step_item'>
                    <div className='step_img'>
                        <img src={Imgonboarding3} alt='onboardingimage1' />
                    </div>

                    <div className='step_content'>
                        <h1> Send & request payments </h1>
                        <p>
                            You can send or recieve any payments from yous
                            accounts.
                        </p>
                    </div>
                </div>
            </Slider>
            {number === 3 ? (
                <div className='last_btn'>
                    <Link to='/signin' onClick={checkedonboarding}>
                        Get Started
                    </Link>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
}

export default OnBoarding;
