import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import CreateBook from './components/CreateBook';
import BookLog from './components/BookLog';
import EditBook from './components/EditBook';

const App = () => {
  return (
    <div class="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create-book" element={<CreateBook/>}/>
          <Route path="/book-log" element={<BookLog/>}/>
          <Route path="/edit-book/:id" element={<EditBook/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;