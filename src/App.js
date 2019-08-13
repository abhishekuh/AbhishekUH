import React from 'react';
import './App.css';
import { Route, HashRouter , Switch , Link } from 'react-router-dom'
import contact from './components/contact'
import home from './components/home'
import projects from './components/projects';

function App() {
  return (
    <HashRouter basename="/">
      <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light nav-width">
                {/* <a className="navbar-brand" href="#">Abhishek</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-tabs">
                        <li className="nav-item active" >
                            <a className="nav-link"><Link to="/home">Home</Link></a>
                        </li>
                        <li className="nav-item"  >
                            <a className="nav-link" ><Link to="/projects">Projects</Link></a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link"><Link to="/contact">Contact</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        {/* <div className="tab-content">
            <div className="tab-pane fade show active" id="home" role="tabpanel" >
                <home /> 
            </div>
            <div className="tab-pane fade" id="projects" role="tabpanel" >
                projects
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" >
                contact 
            </div>
        </div> */}    
            <Route exact path="/" component={home}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/home" component={home}></Route>
            <Route path="/projects" component={projects}></Route>
            </div>
      </HashRouter>   
    
  );
}

export default App;
