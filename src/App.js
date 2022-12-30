import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarChart from './components/BarChart';
import Calculator from './components/Calculator';
import ChroroplethMap from './components/ChroroplethMap';
import Clock from './components/Clock';
import DrumMachine from './components/DrumMachine';
import HeatMap from './components/HeatMap';
import Home from './components/Home';
import JSAlgotithms from './components/JSAlgotithms';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import QuotesPage from './components/QuotesPage';
import Scatterplot from './components/Scatterplot';

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
        <Route path='/js-algotithms' element={<JSAlgotithms />} />
        <Route path='/barchart' element={<BarChart />} />
        <Route path='/scatterplot' element={<Scatterplot />} />
        <Route path='/heatmap' element={<HeatMap />} />
        <Route path='/chroropleth' element={<ChroroplethMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
