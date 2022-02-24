import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Articles from './views/Articles';
import PastEvent from './views/PastEvent';
import Publish from './views/Publish';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/past-events' element={<PastEvent />} />
        <Route path='/admin/publish' element={<Publish />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
