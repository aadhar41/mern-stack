import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';

function App() {
  return (
    <Router>
      <div className="App">
        <PageWrapper>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/a" render={() => {
              return (
                <div>Page A</div>
              );
            }} />

            <Route exact={true} path="/services" element={<Services />} />
            <Route exact={true} path="/portfolio" element={<Portfolio />} />
            <Route exact={true} path="/about" element={<About />} />
            <Route exact={true} path="/team" element={<Team />} />
            <Route exact={true} path="/contact" element={<div>Contact Page</div>} />
            {/* Add more routes here */}
          </Routes>
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;
