import React from 'react';
import './App.css';
import UploadFileLoc from './uploadFileLoc';
import Home from './Home';
import Navigator from './NavigationBar';



function App() { 
    return(
        <div className = "App">
            <Navigator/>
            <h1>Hello World</h1>
            <UploadFileLoc/>
            <Home/>
        </div>
    );
}

export default App;



