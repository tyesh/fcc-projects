import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuotesPage from './components/QuotesPage';

const App = () => {
  return (
    <BrowserRouter>
      <main /*style={{
        background: `url(${bgImage}) 50%/cover no-repeat`,
        minHeight: '100vh',
      }}*/
      >
        <Routes>
          <Route path='/' element={<QuotesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
