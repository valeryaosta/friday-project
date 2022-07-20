import {Dispatch} from "react";
import {authAPI} from "../api/api";
import {setAppErrorAC, setAppErrorActionType, setAppStatusAC, setAppStatusActionType} from "./appReducer";


const initialState = {
    newUser: {},
    isRedirect: false,
}

type UserDataType = {
    email: string,
    password: string
}

type InitRegistrationStateType = typeof initialState

export const registrationReducer = (state: InitRegistrationStateType = initialState, action: RegistrationActionsType): InitRegistrationStateType => {
    switch (action.type) {
        case 'registration/SET_NEW_USER' :
            return {
                ...state,
                newUser: action.payload
            }
        case 'registration/SET_REDIRECT' :
            return {
                ...state,
                isRedirect: action.isRedirect
            }

        default:
            return state
    }
}

// AC
export const setNewUserAC = (payload: InitRegistrationStateType) => ({
    type: 'registration/SET_NEW_USER',
    payload
} as const)
export const setRedirectToProfileAC = (isRedirect: boolean) => ({
    type: 'registration/SET_REDIRECT',
    isRedirect
} as const)

//TC
export const registerTC = (email: string, password: string) => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.register(email, password)
        .then(response => {
            console.log(response);
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppErrorAC(null));
            dispatch(setNewUserAC(response.data));
            dispatch(setRedirectToProfileAC(true));
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error));
        })
        .finally(() => {
            dispatch(setAppStatusAC('idle'))
        })
}


export type SetSuccessActionType = ReturnType<typeof setNewUserAC>
export type SetRedirectActionType = ReturnType<typeof setRedirectToProfileAC>

export type RegistrationActionsType =
    SetSuccessActionType
    | SetRedirectActionType
    | setAppStatusActionType
    | setAppErrorActionType

type ThunkDispatch = Dispatch<RegistrationActionsType>