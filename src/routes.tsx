import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/index';
import Account from './components/Account/index';
import Favorites from './components/Favorites/index';


// export default routesWrapper = () => (
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="account" element={<Account />} />
//         <Route  path="/" element={<Favorites />} />
//     </Routes>
// );


import React from 'react'

const routesWrapper = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route  path="/" element={<Favorites />} />
    </Routes>
  )
}

export default routesWrapper


