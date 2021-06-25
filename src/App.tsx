import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { NewPassword } from './components/NewPassword/NewPassword';
import {Profile} from './components/Profile/Profile';
import {Test} from './components/Test/Test';
import {SignUp} from "./components/SignUp/SignUp";
import {SignIn} from "./components/SingIn/SignIn";
import {RecoveryPassword} from "./components/RecoveryPassword/RecoveryPassword";
import {ErrorNotFound} from "./components/ErrorNotFound/ErrorNotFound";

const App = () => {
    return (
        <div className="App">
            <div style={{margin: "0 auto", display: 'flex', justifyContent: "space-around", width: "600px"}}>
                <NavLink to={'/'}>Test</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/newPassword'}>New Password</NavLink>
                <NavLink to={'/recovery'}>Recovery</NavLink>
                <NavLink to={'/signIn'}>Sign In</NavLink>
                <NavLink to={'/signUp'}>Sign Up</NavLink>
            </div>
            <Switch>
                <Route exact path={'/'} render={() => <Test/>}/>
                <Route exact path={'/profile'} render={() => <Profile/>}/>
                <Route exact path={'/newPassword'} render={() => <NewPassword/>}/>
                <Route exact path={'/recovery'} render={() => <RecoveryPassword/>}/>
                <Route exact path={'/signIn'} render={() => <SignIn/>}/>
                <Route exact path={'/signUp'} render={() => <SignUp/>}/>
                <Route exact path={'/*'} render={() => <ErrorNotFound/>}/>
            </Switch>
        </div>
    )
}

export default App;
