import React from 'react';
import "./ErrorSnackBar.css";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {setAppErrorAC} from "../../redux/appReducer";

type errorMessageType = {
    errorMessage: string
}

const ErrorSnackBar = ({errorMessage}: errorMessageType) => {
    const dispatch = useDispatch();
    const error = useAppSelector(state => state.app.error)

    const onClickHandler = () => dispatch(setAppErrorAC(null))

    return (
        <div className={error ? "showNotification" : "closeNotification"}>
            <div className="text"> {errorMessage} </div>
            <div className="close">
                <div className="text cross" onClick={onClickHandler}>&#10006; </div>
            </div>
        </div>
    );
};

export default ErrorSnackBar;