import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch , Redirect ,useHistory   } from "react-router-dom";
import 'firebase/auth';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase';




import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
//import UserProvider from "./providers/UserProvider";

function App() {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Router> 
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/passwordReset" component={PasswordReset} />


        
        </Router>

  );
} 

export default App;
