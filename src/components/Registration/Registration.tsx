import React from 'react';
import './Registration.css';
import {Redirect} from "react-router-dom";
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {registerTC} from "../../redux/registrationReducer";
import {useAppSelector} from "../../redux/store";
import ErrorSnackBar from "../../common/ErrorSnackBar/ErrorSnackBar";
import {PATH} from '../Routes/Routes';


export const Registration = () => {
    const isRedirect = useAppSelector(state => state.register.isRedirect)
    const error = useAppSelector(state => state.app.error)
    const status = useAppSelector(state => state.app.status)
    const isAuth = useAppSelector(state => state.login.isAuth)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters'
            }

            return errors
        },
        onSubmit: (values) => {
            dispatch(registerTC(values.email, values.password))
        },
    });

    if (isAuth) {
        return <Redirect to={PATH.PROFILE}/>
    }

    if (isRedirect) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Learning Cards</h1>
                <h2>Sign Up</h2>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text"
                           id="email"
                           {...formik.getFieldProps("email")}
                    />
                </div>
                {formik.errors.email && formik.touched.email &&
                    <span className="error">{formik.errors.email}</span>}
                <div>
                    <label htmlFor="password">Password </label>
                    <input type="password"
                           id="password"
                           {...formik.getFieldProps("password")}
                    />
                </div>
                {formik.errors.password && formik.touched.password &&
                    <span className="error">{formik.errors.password}</span>}

                {/*            <div>
                <label htmlFor="password">Confirm password </label>
                <input type="password"
                       id="password"
                       name="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                />
            </div>*/}

                <div className="btnWrapper">
                    <button className="cancel">Cancel</button>
                    <button type="submit" className="register"
                            disabled={!!(formik.errors.email || formik.errors.password)}
                    >
                        Register
                    </button>
                </div>

                {error && <ErrorSnackBar errorMessage={error}/>}
            </form>
        </div>
    )
}


type FormikErrorType = {
    email?: string
    password?: string
}