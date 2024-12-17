import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/index';
import Account from './components/Pages/Account/index';
import Favorites from './components/Pages/Favorites/index';

import React from 'react'
import Register from './components/Pages/Authentication/Register';
import MainLayout from './layouts/MainLayout';
import { navegateTo } from './constants';
import Login from './components/Pages/Authentication/Login';
import Preference from './components/Pages/Account/Bloks/Settings/Blocks/Preference';

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
        <Route path={navegateTo.LOGIN} element={<Login />} />
        <Route path={navegateTo.PREFERENCE} element={<Preference />} />
    </Routes>
  )
}

export default RoutesWrapper


