import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateBook from './components/CreateBook';
import BookLog from './components/BookLog';
import EditBook from './components/EditBook';
import React from "react";

function App() 
{
  return (
    <div class="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<CreateBook/>}/>
          <Route path="/create-book" element={<CreateBook/>}/>
          <Route path="/book-log" element={<BookLog/>}/>
          <Route path="/edit-book/:id" element={<EditBook/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;