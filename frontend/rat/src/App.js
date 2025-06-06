import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Widgets from './Components/Widgets';
import SideBar from './Components/SideBar';
import DashBoard from './Dashboard/DashBoard';
import SysInfo from './Dashboard/SysInfo';
import Osb from './Dashboard/Osb';
import AntiVirus from './Dashboard/AntiVirus';
import Remote from './Dashboard/Remote';
import Browser from './Dashboard/Browser';
import Software from './Dashboard/Software';
import NetworkConnection from './Dashboard/NetworkConnection';
import UserAccount from './Dashboard/UserAccount';
import UserDomain from './Dashboard/UserDomain';
import ScreenSaver from './Dashboard/ScreenSaver';
import Media from './Dashboard/Media';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/sidebar/:ip" element={<SideBar />}></Route>
      </Routes>
    </div>
  );
};

export default App;