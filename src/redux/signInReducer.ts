import {ActionTypes} from "./actions";


const initialSignInState = {}

type InitialSignInStateType = typeof initialSignInState

export const signInReducer = (state: InitialSignInStateType = initialSignInState, action: ActionTypes): InitialSignInStateType => {
    switch (action.type) {
        default:
            return state
    }
}