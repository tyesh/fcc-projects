import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DrumMachine from './components/DrumMachine';
import DrumMachineTesting from './components/DrumMachineTesting';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import QuotesPage from './components/QuotesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuotesPage />} />
        <Route path='/markdown' element={<MarkdownPreviewer />} />
        <Route path='/drummachine' element={<DrumMachine />} />
        <Route path='/drummachinetesting' element={<DrumMachineTesting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
