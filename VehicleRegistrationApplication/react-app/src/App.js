import React, { Component } from 'react';
import SignUp from './SignUp';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={
                            <React.Fragment>
                                <header className="App-header">
                                    <Link to="/signup">Sign Up</Link>
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
