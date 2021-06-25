import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";
import {profileReducer} from "./profileReducer";
import {passwordReducer} from "./passwordReducer";
import {signInReducer} from "./signInReducer";
import {signUpReducer} from "./signUpReducer";


const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    password: passwordReducer,
    signUp: signUpReducer,
    signIn: signInReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store