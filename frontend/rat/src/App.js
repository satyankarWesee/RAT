import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Widgets from './Components/Widgets';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/widgets" element={<Widgets />} />
      </Routes>
    </div>
  );
};

export default App;