import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import {ForgotPassword} from "../ForgotPassword/ForgotPassword";
import CheckEmail from "../CheckEmail/CheckEmail";
import {NewPassword} from "../NewPassword/NewPassword";
import {Profile} from "../Profile/Profile";
import CardPacks from "../Packs/CardPacks";
import Cards from "../Cards/Cards";
import {ErrorNotFound} from "../ErrorNotFound/ErrorNotFound";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Profile/>}/>
            <Route exact path={PATH.LOGIN} render={() => <Login/>}/>
            <Route exact path={PATH.REGISTER} render={() => <Registration/>}/>
            <Route exact path={PATH.FORGOT_PASSWORD} render={() => <ForgotPassword/>}/>
            <Route exact path={PATH.CHECK_EMAIL} render={() => <CheckEmail/>}/>
            <Route exact path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
            <Route exact path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route exact path={PATH.CARD_PACKS} render={() => <CardPacks/>}/>
            <Route exact path={PATH.CARDS} render={() => <Cards/>}/>
            <Route exact path={'/*'} render={() => <ErrorNotFound/>}/>
        </Switch>
    );
};

export default Routes;

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/registration',
    FORGOT_PASSWORD: '/forgot-password',
    CHECK_EMAIL: '/check-email',
    NEW_PASSWORD: '/set-new-password/:token',
    PROFILE: '/profile',
    CARD_PACKS: '/card_packs',
    CARDS: '/cards',
}