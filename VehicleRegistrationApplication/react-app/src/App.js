import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} /> {/* Add SignIn component route */}
                        <Route path="/" element={
                            <React.Fragment>
                                <header className="App-header">
                                    <div>
                                        <Link to="/signup">Sign Up</Link>
                                    </div>
                                    <div>
                                        <Link to="/signin">Sign In</Link>
                                    </div>
                                </header>
                                {/* Diğer bileşenler veya içerikler buraya eklenebilir */}
                            </React.Fragment>
                        } />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
