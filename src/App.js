import React from 'react';
import Header from './components/Header';
import Report from './components/Report';
import Upload from './components/Upload';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Upload />
      <Routes>
      <Route path="/report/:id" component={<Report/>} />
      </Routes>
    </div>
  );
}

export default App;
