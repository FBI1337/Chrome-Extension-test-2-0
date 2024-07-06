import React from 'react'
import { Routes, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/';
import Footer from './components/Footer';
import { HEADER_NAME } from './constants';

const App: React.FC = () => {
    
    return (
      <BrowserRouter>
        <Header name={HEADER_NAME}/>
        <Routes />
        <Footer />
      </BrowserRouter>
    );  
  }

export default App
