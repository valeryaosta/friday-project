import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {authMe} from "./redux/loginReducer";
import {useAppSelector} from './redux/store';
import {LinearProgressBar} from "./common/LinearProgress/LinearProgress";
import NavBar from "./components/NavBar/NavBar";
import Routes from './components/Routes/Routes';

const App = () => {
    const isAuth = useAppSelector(state => state.login.isAuth)
    const status = useAppSelector(state => state.app.status)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

    return (
        <div className="App">
            <NavBar/>
            <Routes/>
            {status === 'loading' && <LinearProgressBar/>}
        </div>
    )
}

export default App;
