import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Rockets from './Components/rockets/rockets';
import Mission from './Components/missions/Mission';
import Dragon from './Components/dragons/dragons';
import MyProfile from './Components/my_profile/my_profile';

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
