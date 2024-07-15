import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/index';
import Account from './components/Pages/Account/index';
import Favorites from './components/Pages/Favorites/index';

import React from 'react'
import Register from './components/Pages/Register';
import MainLayout from './layouts/MainLayout';
import { navegateTo } from './constants';

const RoutesWrapper: React.FC = () => {

  return (
    <Routes>
        <Route path={navegateTo.HOME} element={
          <MainLayout>
            <Home />
          </MainLayout>
        }/>
        <Route path={navegateTo.ACCOUNT} element={
          <MainLayout>
            <Account /> 
          </MainLayout>
          }/>
        <Route  path={navegateTo.FAVORITES} element={
          <MainLayout>
            <Favorites />
          </MainLayout>
          }/>
        <Route path="*" element={
          <MainLayout>
            <Home />
          </MainLayout>
          }/>
        <Route path={navegateTo.REGISTER} element={<Register />} />
    </Routes>
  )
}

export default RoutesWrapper


