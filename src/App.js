import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import contact from './components/contact'
import home from './components/home'
import projects from './components/projects';

function App() {
  return (
      <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light nav-width">
                {/* <a className="navbar-brand" href="#">Abhishek</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
      <Router>
           <Switch>
            <Route exact path="/" component={home}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/home" component={home}></Route>
            <Route path="/projects" component={projects}></Route>
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
