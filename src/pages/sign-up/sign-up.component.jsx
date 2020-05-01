import React, { Component } from 'react';

import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import { ReactComponent as GoogleAuthImage } from '../../assets/btn_google_light_normal_ios.svg';
import { authenticateWithGoogle } from '../../firebase/firebase.utils';

export class SignUpPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
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
                <div className="signup-oauth">
                    <button className="custom-button custom-button--oauth" onClick={authenticateWithGoogle}>
                        <GoogleAuthImage className="google-image"/>
                        <span className="custom-button--oauth__text">Sign up with Google</span>
                    </button>
                </div>
                <div className="divider">
                    OR
                </div>
                <form onSubmit={this.handleSubmit}>
                    <span className="form-heading">Sign up with email and password</span>
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
                            Sign up
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUpPage;
