import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" exact>
                        <header className="App-header">
                            <Link to="/signup">Sign Up</Link>
                        </header>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
