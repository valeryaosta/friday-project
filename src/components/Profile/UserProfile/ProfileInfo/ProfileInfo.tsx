import React, {useState} from 'react';
import "./ProfileInfo.css"
import logoutIcon from "../../../../assets/logout.svg"
import UserWithNoAvatar from "../../../../assets/UserWithNoAvatar.png"
import changePhoto from "../../../../assets/changePhoto.svg"
import {useDispatch} from "react-redux";
import {deleteAuthUserDataTC} from "../../../../redux/loginReducer";
import {useAppSelector} from "../../../../redux/store";
import {updateUserProfileDataTC} from "../../../../redux/profileReducer";

const ProfileInfo = () => {
    const {avatar, name}: any = useAppSelector(state => state.login.user)

    const [editMode, setEditMode] = useState(false)
    const [userName, setUserName] = useState(name)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateUserProfileDataTC(userName, ''))
    }

    const onSetNewUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(deleteAuthUserDataTC())
    }

    return (
        <div className="profileDataWrapper">
            <div className="userWrapper">
                <img src={avatar ? avatar : UserWithNoAvatar} alt='user avatar' className="ava"/>
                <a>
                    <img src={changePhoto} alt='change icon' className="change"/>
                </a>

                <a className="logout" onClick={onLogout}>
                    <img src={logoutIcon} alt="logout" title="Logout"/>
                </a>
            </div>

            {!editMode &&
                <div className='userName'>
                    <span>{userName}</span>
                </div>
            }
            {editMode &&
                <div className='userName'>
                    <input autoFocus onBlur={deactivateEditMode} value={userName} onChange={onSetNewUserName}
                           className='inputName'/>
                </div>
            }

            <div className='editWrapper'>
                <button onClick={activateEditMode} title='Edit your name'>Edit Profile</button>
            </div>
        </div>
    );
};

export default ProfileInfo;