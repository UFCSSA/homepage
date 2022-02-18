import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Articles from './views/Articles';
import Publish from './views/Publish';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/admin/publish' element={<Publish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
