import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header/';
import Footer from './components/Footer';
import { HEADER_NAME } from './constants';
import { Routes } from 'react-router-dom'


const App: React.FC = () => {
    
    return (
      <div>
        <BrowserRouter>
          <Header name={HEADER_NAME}/>
          <Routes />  
          <Footer />
        </BrowserRouter>
      </div>
    );  
  }

export default App
