import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import classes from './login.module.scss';

import FormInput from '../../components/form-input/form-input.component';
import { ReactComponent as GoogleAuthImage } from '../../assets/btn_google_light_normal_ios.svg';
import { authenticateWithGoogle } from '../../firebase/firebase.utils';

export class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        const  { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="form-container">
                <div className="authenticate-oauth">
                    <button className="custom-button custom-button--oauth" onClick={authenticateWithGoogle}>
                        <GoogleAuthImage className="google-image"/>
                        <span className="custom-button--oauth__text">Login with Google</span>
                    </button>
                </div>
                <div className="divider">
                    OR
                </div>
                <form className="authentication-form" onSubmit={this.handleSubmit}>
                    <span className="form-heading">Login with email and password</span>
                    <FormInput
                        id="email"
                        type="email"
                        name="email"
                        label="email"
                        handleChange={this.handleChange}
                        value={email} />
                    <FormInput
                        id="password"
                        type="password"
                        customClass="form-input--password"
                        name="password"
                        label="password"
                        handleChange={this.handleChange}
                        value={password} />
                    <button className="custom-button custom-button--primary"
                        type="submit">
                            LOGIN
                    </button>
                </form>
                <span className="alternate-authentication">New to Monarch Apparel?</span>
                <Link to="/sign-up" className="login-link">Create an account</Link>
            </div>
        )
    }
}

export default LoginPage;
