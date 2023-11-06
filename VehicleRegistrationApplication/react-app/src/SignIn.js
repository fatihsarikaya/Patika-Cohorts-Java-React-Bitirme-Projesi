// SignIn.js
import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        // Handle the sign-in logic, e.g., make an API request
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                // API response handling
                if (data.success) {
                    // Sign-in successful
                    console.log('Sign-in successful');
                } else {
                    // Sign-in failed
                    console.error('Sign-in failed');
                }
            })
            .catch(error => {
                console.error('An error occurred during the API request', error);
            });

        console.log('E-mail:', email);
        console.log('Password:', password);
    }

    render() {
        return (
            <div>
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
