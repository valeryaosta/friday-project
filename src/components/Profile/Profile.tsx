import React, {useEffect} from "react";
import {useAppSelector} from "../../redux/store";
import UserProfile from "./UserProfile/UserProfile";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes/Routes";

export const Profile = () => {
    const isAuth = useAppSelector(state => state.login.isAuth)

    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) {
            // dispatch(getAuthUserDataTC())
        }
    }, [dispatch])
    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
            <UserProfile/>
        </div>
    )
}