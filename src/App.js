import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Homepage from './pages/homepage/homepage.component';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
        </Switch>
    );
}

export default App;
