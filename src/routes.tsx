import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/index';
import Account from './components/Account/index';
import Favorites from './components/Favorites/index';


export default () => (
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Account />} />
        <Route  path="/" element={<Favorites />} />
    </Routes>
); 
