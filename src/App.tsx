import React from 'react';
import './App.css';
import {useAppSelector} from './redux/store';
import {LinearProgressBar} from "./common/LinearProgress/LinearProgress";
import NavBar from "./components/NavBar/NavBar";
import Routes from './components/Routes/Routes';

const App = () => {
    const status = useAppSelector(state => state.app.status)

    return (
        <div className="App">
            <NavBar/>
            <Routes/>
            {status === 'loading' && <LinearProgressBar/>}
        </div>
    )
}

export default App;
