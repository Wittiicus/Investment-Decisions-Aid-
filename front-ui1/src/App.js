import React from 'react';
import './App.css';
import UploadFileLoc from './uploadFileLoc';
import Home from './Home';
import Navigator from './NavigationBar';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';



function App() { 
    return(
        <div className = "App">
            <Navigator/>
            <Home/>
            <Router>
                <Switch>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/batchProcessing" element = {<UploadFileLoc/>} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;



