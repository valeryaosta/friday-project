import {Dispatch} from "react";
import {authAPI} from "../api/api";
import {
    setAppErrorAC,
    setAppErrorActionType,
    setAppStatusAC,
    setAppStatusActionType,
} from "./appReducer";

import {setProfileDataActionType} from "./profileReducer";

export type UserDataType = {
    _id: string,
    email: string,
    name: string,
    avatar: string | null,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean
}

const initialSignInState = {
    user: {},
    isAuth: false,
}

type InitialSignInStateType = {
    user: UserDataType | {},
    isAuth: boolean,
}

export const loginReducer = (state: InitialSignInStateType = initialSignInState, action: LoginActionsType): InitialSignInStateType => {
    switch (action.type) {
        case 'login/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

// AC
export const setAuthUserDataAC = (payload: InitialSignInStateType) => ({
    type: 'login/SET_USER_DATA', payload
} as const)

// TC

//auth
export const authMe = () => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.me()
        .then(res => {
            console.log(res)
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAuthUserDataAC({user: res.data, isAuth: true}))
        }).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatusAC('failed'))
        dispatch(setAppErrorAC(error))
    })
        .finally(() => {
            dispatch(setAppStatusAC('idle'))
        })
}

// login
export const getAuthUserDataTC = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log(res)
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAuthUserDataAC({user: res.data, isAuth: true}))
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

// logout
export const deleteAuthUserDataTC = () => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAuthUserDataAC({user: {}, isAuth: false}))
            alert(res.data.info)
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


export type setAuthUserDataActionType = ReturnType<typeof setAuthUserDataAC>

export type LoginActionsType =
    setAuthUserDataActionType
    | setAppStatusActionType
    | setAppErrorActionType
    | setProfileDataActionType

type ThunkDispatch = Dispatch<LoginActionsType>


