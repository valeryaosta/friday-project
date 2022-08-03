import {profileAPI, ResponseUpdateUserType} from "../api/api";
import {Dispatch} from "react";
import {setAppErrorAC, setAppErrorActionType, setAppStatusAC, setAppStatusActionType} from "./appReducer";

type ProfileDataType = {
    name: string
    avatar: string
    email: string
    id: string
}

const initialProfileState = {}

type InitialProfileStateType = typeof initialProfileState

export const profileReducer = (state: InitialProfileStateType = initialProfileState, action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case 'PROFILE/SET-PROFILE-DATA':
            const {name, avatar, email, id} = action.payload
            return {
                ...state,
                name: name,
                avatar: avatar,
                email: email,
                _id: id
            }
        case 'PROFILE/UPDATE-USER-DATA':
            return {
                ...state,
                ...action.payload.updatedUser
            }

        default:
            return state
    }
}

// AC
export const setProfileDataAC = (payload: ProfileDataType) => ({type: 'PROFILE/SET-PROFILE-DATA', payload} as const)
export const updateUserDataAC = (data: ResponseUpdateUserType) => ({
    type: 'PROFILE/UPDATE-USER-DATA',
    payload: data
} as const)

// TC

export const updateUserProfileDataTC = (name: string, avatar?: string) => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    profileAPI.changeProfile({name, avatar})
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(updateUserDataAC(res.data))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error))
        })
}


export type setProfileDataActionType = ReturnType<typeof setProfileDataAC>
export type updateUserDataActionType = ReturnType<typeof updateUserDataAC>


export type ProfileActionsType =
    setProfileDataActionType | updateUserDataActionType | setAppStatusActionType | setAppErrorActionType

type ThunkDispatch = Dispatch<ProfileActionsType>