import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/index';
import Account from './components/Account/index';
import Favorites from './components/Favorites/index';

import React from 'react'

const RoutesWrapper: React.FC = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route  path="favorites" element={<Favorites />} />
    </Routes>
  )
}

export default RoutesWrapper


