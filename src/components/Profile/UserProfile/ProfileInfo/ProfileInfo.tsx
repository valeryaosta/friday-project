import React from 'react';
import "./ProfileInfo.css"
import logoutIcon from "../../../../assets/logout.svg"
import {useDispatch} from "react-redux";
import {deleteAuthUserDataTC} from "../../../../redux/loginReducer";

const ProfileInfo = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(deleteAuthUserDataTC())
    }

    return (
        <div className="profileDataWrapper">
            <span>Profile</span>
            <a className="logout" onClick={onLogout}>
                <img src={logoutIcon} alt="logout"/>
            </a>
        </div>
    );
};

export default ProfileInfo;