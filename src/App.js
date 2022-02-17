import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Posts from './views/Posts';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
