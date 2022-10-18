import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import DrumMachine from './components/DrumMachine';
import Home from './components/Home';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import QuotesPage from './components/QuotesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotes' element={<QuotesPage />} />
        <Route path='/markdown' element={<MarkdownPreviewer />} />
        <Route path='/drummachine' element={<DrumMachine />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/clock' element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
