import './App.css';
import { Switch, Route } from "react-router-dom";
import {LoginPage} from './components/LoginPage';
import Navbar from './components/Navbar';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
  <div className="App">
  <Navbar />
  
  <Switch>

  <PrivateRoute exact path="/">
    <Dashboard />
  </PrivateRoute>
        
  <Route exact path="/register">
    <SignupPage />
  </Route>
  
  <Route exact path="/login">
    <LoginPage />
  </Route>

  </Switch>
  </div>
  );
}

export default App;
