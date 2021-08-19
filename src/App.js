import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import StudentsPage from './pages/students';
import StudentRegistration from './pages/student-registration';
import Dashboard from './pages/dasboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Students Registration</h1>
      </header>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/register">
              <StudentRegistration />
            </Route>
            <Route path="/students">
              <StudentsPage></StudentsPage>
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
