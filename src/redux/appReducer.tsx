// Initial state
const initialAppState: InitialAppStateType = {
    status: 'idle',
    error: null,
}

// types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialAppStateType = {
    status: RequestStatusType,
    error: null | string,
}

export const appReducer = (state: InitialAppStateType = initialAppState, action: AppActionsType): InitialAppStateType => {
    switch (action.type) {
        case 'app/SET-STATUS' :
            return {
                ...state,
                status: action.status
            }
        case 'app/SET-ERROR' :
            return {
                ...state,
                error: action.error
            }


        default:
            return state
    }
}

// AC
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'app/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'app/SET-ERROR', error} as const)

// types
export type setAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setAppErrorActionType = ReturnType<typeof setAppErrorAC>


export type AppActionsType = setAppStatusActionType | setAppErrorActionType