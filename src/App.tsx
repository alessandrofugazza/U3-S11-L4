import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ArticlesList/>}
          />
          <Route
            path="/articles/:articleId"
            element={<ArticleDetails/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
