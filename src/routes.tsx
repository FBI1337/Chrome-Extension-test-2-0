import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/index';
import Account from './components/Pages/Account/index';
import Favorites from './components/Pages/Favorites/index';

import React from 'react'

const RoutesWrapper: React.FC = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route  path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default RoutesWrapper


