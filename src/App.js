import React from 'react';
import { Router, Route } from "react-router-dom";

import './App.css';

import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";

import HomePage from './components/HomePage';
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

Amplify.configure(awsExports);

const history = createHistory();

function App() {
  return (
    <AmplifyAuthenticator>
    <div className="App">
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark" >
          <Navbar.Brand href="/">Image Gallery App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <AmplifySignOut />
        </Navbar>
        
       <Route path="/" exact component={HomePage} />
      </Router>
    </div>
    </AmplifyAuthenticator>
    
  );
}

export default App;
