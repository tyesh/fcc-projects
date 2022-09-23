import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import QuotesPage from './components/QuotesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuotesPage />} />
        <Route path='/markdown' element={<MarkdownPreviewer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
