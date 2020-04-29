import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
        </Switch>
    );
}

export default App;
