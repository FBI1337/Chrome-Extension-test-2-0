import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { navegateTo } from './constants';

import Home from './components/Pages/Home/index';
import Account from './components/Pages/Account/index';
import Favorites from './components/Pages/Favorites/index';

import MainLayout from './layouts/MainLayout';
import ThemeProvider from './layouts/ThemeLayout';

import Register from './components/Pages/Authentication/Register';
import Login from './components/Pages/Authentication/Login';

import Support from './components/Pages/Account/Bloks/HelpCenter/Blocks/Support';
import SupportChat from './components/Pages/Account/Bloks/HelpCenter/Blocks/SupportChat';
import MyProfile from './components/Pages/Account/Bloks/MyAccount/Blocks/My Profile';
import Preference from './components/Pages/Account/Bloks/Settings/Blocks/Preference';
import ReportProblem from './components/Pages/Account/Bloks/HelpCenter/Blocks/ReportAProblem';

const RoutesWrapper: React.FC = () => {

  return (
    <ThemeProvider>
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
        <Route path={navegateTo.SUPPORT} element={<Support />} />
        <Route path={navegateTo.REPORT} element={<ReportProblem />} />
        <Route path={navegateTo.SUPPORTCHAT} element={<SupportChat />} />
        <Route path={navegateTo.MYPROFILE} element={<MyProfile />} />
    </Routes>
    </ThemeProvider>
  )
}

export default RoutesWrapper


