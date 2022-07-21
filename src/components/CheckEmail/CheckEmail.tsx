import React from 'react';
import {useAppSelector} from "../../redux/store";
import checkEmailIcon from "../../assets/checkEmailIcon.svg"
import "../Registration/Registration.css"
import "./CheckEmail.css"

const CheckEmail = () => {
    const email = useAppSelector(state => state.password.email)

    return (
        <div>
            <div className="form">
                <h1>Learning Cards</h1>
                <div className="checkEmail">
                    <img src={checkEmailIcon} alt='check icon'/>
                </div>

                <h2>Check Email</h2>

                <p className="quo emailInstr">We’ve sent an Email with instructions to
                    <span>{email}</span>
                </p>
            </div>
        </div>
    );
};

export default CheckEmail;