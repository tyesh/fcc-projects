import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuotesPage from './components/QuotesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuotesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
