
import {ActionTypes} from "./actions";


const initialAppState = {}

type InitialAppStateType = typeof initialAppState

export const appReducer = (state: InitialAppStateType = initialAppState, action: ActionTypes): InitialAppStateType => {
    switch (action.type) {
        default:
            return state
    }
}