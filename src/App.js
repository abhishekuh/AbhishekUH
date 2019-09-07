import React from 'react';
import './App.css';
import { Route, HashRouter, Link } from 'react-router-dom'
import contact from './components/contact'
import home from './components/home'
import projects from './components/projects';

function App() {
    return (
        <HashRouter basename="/">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light nav-width">
                <a className="navbar-brand nav-logo"><span className="brand-logo">Abhishek Harapanhalli</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-items">
                            <li className="nav-item active" >
                                <Link className="link-color" to="/home">Home</Link>
                            </li>
                            <li className="nav-item"  >
                                <Link className="link-color" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="link-color" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={home}></Route>
                <Route path="/contact" component={contact}></Route>
                <Route path="/home" component={home}></Route>
                <Route path="/projects" component={projects}></Route>
            </div>
        </HashRouter>

    );
}

export default App;
