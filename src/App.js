import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import data from './data'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: data
        }

    }

    render() {
        const {home, about, footer} = this.state.data;
        return (
            <Router>
                <header id="header">
                    <div className="container">
                        <div className="row align-items-center justify-content-between d-flex">
                            <div id="logo">
                                <a href="index.html"><img src="img/logo.png" alt="" title=""/></a>
                            </div>
                            <nav id="nav-menu-container">
                                <ul className="nav-menu">

                                    <li><Link to='/'>Home</Link></li>
                                    <li><a href="/#feature">Service</a></li>
                                    <li><a href="/#offer">Portfolio</a></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route path="/about">
                        <About data={about}/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/">
                        <Home data={home}/>
                    </Route>
                </Switch>
                <Footer data={footer}/>
            </Router>

        );
    }
}

export default App;
