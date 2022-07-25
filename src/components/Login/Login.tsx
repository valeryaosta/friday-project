import React, {useEffect} from "react";
import "../Registration/Registration.css"
import "./Login.css"
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {NavLink, Redirect} from "react-router-dom";
import {authMe, getAuthUserDataTC} from "../../redux/loginReducer";
import {useAppSelector} from "../../redux/store";
import ErrorSnackBar from "../../common/ErrorSnackBar/ErrorSnackBar";
import {PATH} from "../Routes/Routes";
import {LinearProgressBar} from "../../common/LinearProgress/LinearProgress";


export const Login = () => {
    const error = useAppSelector(state => state.app.error)
    const isAuth = useAppSelector(state => state.login.isAuth)
    const isInit = useAppSelector(state => state.app.isInit)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
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
            console.log(values)
            dispatch(getAuthUserDataTC(values.email, values.password, values.rememberMe))
        },
    });

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

    if (!isInit) {
        return <LinearProgressBar/>
    }

    if (isAuth) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <div>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Learning Cards</h1>
                <h2>Sign In</h2>
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
                    <input
                        type="password"
                        id="password"
                        {...formik.getFieldProps("password")}
                    />
                </div>
                {formik.errors.password && formik.touched.password &&
                    <span className="error">{formik.errors.password}</span>}

                <div className="checkboxWrapper">

                    <input type="checkbox"
                           id="rememberMe"
                           {...formik.getFieldProps("rememberMe")}
                    />
                    <label htmlFor="rememberMe">Remember me </label>
                </div>

                <NavLink to={PATH.FORGOT_PASSWORD} className="forgot">Forgot Password</NavLink>

                <div className="btnLoginWrapper">
                    <button type="submit" className="login"
                            disabled={!!(formik.errors.email || formik.errors.password)}
                    >Login
                    </button>
                </div>

                <p className="quo">Don't have an account?</p>

                <NavLink to={PATH.REGISTER} className="regLink">Sign Up</NavLink>

                {error && <ErrorSnackBar errorMessage={error}/>}

            </form>
        </div>
    )
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}