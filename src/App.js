
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Edit from './screens/Edit';

function App() {
  const [toDos,setToDos]= useState([]);
  const [editIndex,setEditIndex]= useState(null);
  return (
   <Router>
        <Routes>
            <Route
            path='/'
            element= {<Home toDos={toDos} setToDos={setToDos} setEditIndex={setEditIndex} />}
            />
            <Route
            path='/edit'
            element= {<Edit toDos={toDos} setToDos={setToDos} editIndex={editIndex} />}
            />
        </Routes>
    </Router>
  );
}

export default App;
