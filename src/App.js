import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import { auth, maybeCreateUserProfileDocument } from './firebase/firebase.utils';


export class App extends Component {
    constructor() {
        super()
    
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFunctions = [];

    componentDidMount() {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (!userAuth) {
                this.setState({
                    currentUser: null
                });

                return;
            }

            const userRef = await maybeCreateUserProfileDocument(userAuth);

            const unsubscribeFromSnapshot = userRef.onSnapshot((snapShot) => {

                this.setState({
                    currentUser: {
                        id: snapShot.id,
                        ...snapShot.data()
                    },
                });
            });

            this.unsubscribeFunctions.push(unsubscribeFromSnapshot);
        });

        this.unsubscribeFunctions.push(unsubscribeFromAuth);
    }

    closeSubscriptions = () => {
        this.unsubscribeFunctions.forEach(unsubscribeFunction => {
            unsubscribeFunction();
        });
    }

    componentWillUnmount() {
        this.closeSubscriptions();
    }
    
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route path='/login' component={LoginPage}></Route>
                    <Route path='/sign-up' component={SignUpPage}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;
