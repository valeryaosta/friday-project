
import {ActionTypes} from "./actions";


const initialProfileState = {}

type InitialProfileStateType = typeof initialProfileState

export const profileReducer = (state: InitialProfileStateType = initialProfileState, action: ActionTypes): InitialProfileStateType => {
    switch (action.type) {
        default:
            return state
    }
}