import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.js';
import Rockets from './Components/rockets/Rockets.js';
import Mission from './Components/missions/Mission.js';
import Dragon from './Components/dragons/Dragons.js';
import MyProfile from './Components/my_profile/My_profile.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<Dragon />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/My-Profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
