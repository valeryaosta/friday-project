import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import ErrorSnackBar from "../../common/ErrorSnackBar/ErrorSnackBar";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";

import "../Login/Login.css";
import "./ForgotPassword.css";
import {forgotPasswordTC} from "../../redux/passwordReducer";

export const ForgotPassword = () => {
    const error = useAppSelector(state => state.app.error)
    const emailEntered = useAppSelector((state) => state.password.email)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            return errors
        },
        onSubmit: (values) => {
            dispatch(forgotPasswordTC(values.email))
        },
    });

    if (emailEntered) {
        return <Redirect to={PATH.CHECK_EMAIL}/>
    }

    return (
        <div>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Learning Cards</h1>
                <h2 className="forPass">Forgot your password?</h2>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text"
                           id="email"
                           {...formik.getFieldProps("email")}
                    />
                </div>
                {formik.errors.email && formik.touched.email &&
                    <span className="error">{formik.errors.email}</span>}

                <p className="instr">Enter your email address and we will send you further instructions</p>

                <div className="btnLoginWrapper">
                    <button type="submit" className="login"
                            disabled={!!(formik.errors.email)}>
                        Send Instructions
                    </button>
                </div>

                <p className="quo">Did you remember your password?</p>

                <NavLink to={PATH.LOGIN} className="regLink">Try logging in</NavLink>

                {error && <ErrorSnackBar errorMessage={error}/>}
            </form>
        </div>
    )
}

type FormikErrorType = {
    email?: string
}