import React, { Component } from 'react';
import './css/reset.css';
import './css/main.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
