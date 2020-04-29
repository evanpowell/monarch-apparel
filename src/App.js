import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
        </Switch>
    );
}

export default App;
