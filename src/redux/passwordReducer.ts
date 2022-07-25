import {Dispatch} from "react";
import {setAppErrorAC, setAppErrorActionType, setAppStatusAC, setAppStatusActionType} from "./appReducer";
import {passwordAPI} from "../api/api";

const initialPasswordState = {
    email: '',
    success: false
}

type InitialPasswordStateType = typeof initialPasswordState

export const passwordReducer = (state: InitialPasswordStateType = initialPasswordState, action: PasswordActionsType): InitialPasswordStateType => {
    switch (action.type) {
        case 'password/FORGOT' :
            return {
                ...state,
                email: action.email
            }
        case 'password/SET_NEW_PASSWORD_SUCCESS' :
            return {
                ...state,
                success: action.success
            }
        default:
            return state
    }
}

// AC
export const forgotPasswordAC = (email: string) => ({
    type: 'password/FORGOT', email
} as const)

export const setNewPasswordSuccessAC = (success: boolean) => ({
    type: 'password/SET_NEW_PASSWORD_SUCCESS',
    success
} as const)

// TC
export const forgotPasswordTC = (email: string) => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    passwordAPI.forgot(email)
        .then(() => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(forgotPasswordAC(email))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
            dispatch(setAppStatusAC('idle'))
        })
}

export const setNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    passwordAPI.setNewPassword(password, resetPasswordToken)
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setNewPasswordSuccessAC(true))
            dispatch(setAppErrorAC(res.data.info + ' you will be redirected to login page'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error))
        })
}


export type forgotPasswordActionType = ReturnType<typeof forgotPasswordAC>
export type setNewPasswordSuccessActionType = ReturnType<typeof setNewPasswordSuccessAC>

export type PasswordActionsType =
    forgotPasswordActionType
    | setAppStatusActionType
    | setAppErrorActionType
    | setNewPasswordSuccessActionType

type ThunkDispatch = Dispatch<PasswordActionsType>
