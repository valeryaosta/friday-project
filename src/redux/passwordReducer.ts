import {ActionTypes} from "./actions";


const initialPasswordState = {}

type InitialPasswordStateType = typeof initialPasswordState

export const passwordReducer = (state: InitialPasswordStateType = initialPasswordState, action: ActionTypes): InitialPasswordStateType => {
    switch (action.type) {
        default:
            return state
    }
}