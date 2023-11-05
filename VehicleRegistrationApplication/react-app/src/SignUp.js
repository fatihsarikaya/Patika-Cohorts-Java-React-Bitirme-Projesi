import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;

        // Bu noktada sunucuya kayıt işlemini yapabilirsiniz.
        // Örnek: fetch veya axios kullanarak bir POST isteği gönderme
        /*
        console.log('Username:', username);
        console.log('E-mail:', email);
        console.log('Password:', password);
        */
        // Kullanıcı verilerini sunucuya gönder
        axios.post('/signup', {
            username: username,
            email: email,
            password: password
        })
            .then(response => {
                console.log('Sunucu cevabı:', response.data);
            })
            .catch(error => {
                console.error('Sunucu hatası:', error);
            });
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
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
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
