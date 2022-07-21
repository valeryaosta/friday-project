
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
        default:
            return state
    }
}


export const setProfileDataAC = (payload: ProfileDataType) => ({type: 'PROFILE/SET-PROFILE-DATA', payload} as const)


export type setProfileDataActionType = ReturnType<typeof setProfileDataAC>


export type ProfileActionsType =
    setProfileDataActionType
