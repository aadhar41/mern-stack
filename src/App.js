import React from 'react';
import PageWrapper from './components/PageWrapper';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;
