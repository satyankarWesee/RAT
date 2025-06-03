import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Widgets from './Components/Widgets';
import DashBoard from './Components/DashBoard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/widgets" element={<Widgets />}/>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
      </Routes>
    </div>
  );
};

export default App;