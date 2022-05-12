import React from "react";
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Footer from './Footer';
//import List from './List';
import Front from './Front/Front';
import Back from './Back/Back';
import './index.css';
import Nav from './Front/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";

// class App extends Component {
//  render() {
//  return (
//  <div>
//  <h1>Component dari Class App</h1>
//  <List/>
//  <Footer judul='Halaman Footer' nama='' />
//  </div>
//  );
//  }
// }
// export default App;

function App() {
    return (
        <div className="container">

            <Router>
                <Route path="/" component={Front} exact/>
                <Route path="/home" component={Front} />
                <Route path="/admin" component={Back} />

                

                
            </Router>

        </div>
    );
}

export default App;