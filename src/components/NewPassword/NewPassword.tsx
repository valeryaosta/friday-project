import React from "react";
import ErrorSnackBar from "../../common/ErrorSnackBar/ErrorSnackBar";
import {useFormik} from "formik";
import {useAppSelector} from "../../redux/store";
import "../Registration/Registration.css"
import "../CheckEmail/CheckEmail.css"
import {Redirect, useParams} from "react-router-dom";
import {setNewPasswordTC} from "../../redux/passwordReducer";
import {useDispatch} from "react-redux";
import {PATH} from "../Routes/Routes";

export const NewPassword = () => {

    const email = useAppSelector(state => state.password.email)
    const error = useAppSelector(state => state.app.error)
    const success = useAppSelector(state => state.password.success)

    const {token} = useParams<Record<string, string>>()
    const tokenName = token ? token : ''

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters'
            }

            return errors
        },
        onSubmit: (values) => {
            dispatch(setNewPasswordTC(values.password, tokenName))
        },
    });

    if (success) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Learning Cards</h1>
                <h2 className="forPass">Create new password</h2>

                <div>
                    <label htmlFor="password">Password </label>
                    <input type="password"
                           id="password"
                           {...formik.getFieldProps("password")}
                    />
                </div>
                {formik.errors.password && formik.touched.password &&
                    <span className="error">{formik.errors.password}</span>}


                <p className="quo emailInstr left">
                    Create new password and we will send you further instructions to
                    <span>
                        {email}
                    </span>
                </p>

                <div className="btnLoginWrapper">
                    <button type="submit" className="login"
                            disabled={!!(formik.errors.password)}>
                        Create new password
                    </button>
                </div>

                {error && <ErrorSnackBar errorMessage={error}/>}
            </form>
        </div>
    )
}

type FormikErrorType = {
    password?: string
}