import {ActionTypes} from "./actions";


const initialSignUpState = {}

type InitialSignUpStateType = typeof initialSignUpState

export const signUpReducer = (state: InitialSignUpStateType = initialSignUpState, action: ActionTypes): InitialSignUpStateType => {
    switch (action.type) {
        default:
            return state
    }
}