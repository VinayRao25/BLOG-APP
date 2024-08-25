import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
