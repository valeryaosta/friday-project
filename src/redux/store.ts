import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {ThunkDispatch, ThunkAction,} from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppActionsType, appReducer} from "./appReducer";
import {profileReducer} from "./profileReducer";
import {PasswordActionsType, passwordReducer} from "./passwordReducer";
import {LoginActionsType, loginReducer} from "./loginReducer";
import {RegistrationActionsType, registrationReducer} from "./registrationReducer";


const rootReducer = combineReducers({
    app: appReducer,
    register: registrationReducer,
    profile: profileReducer,
    password: passwordReducer,
    login: loginReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType = RegistrationActionsType | AppActionsType | LoginActionsType | PasswordActionsType
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//type AppThunk
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>;

// @ts-ignore
window.store = store