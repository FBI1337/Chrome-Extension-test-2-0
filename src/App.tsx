import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header/';
import Footer from './components/Footer';
import { HEADER_NAME } from './constants';
import RoutesWrapper  from './routes'


const App: React.FC = () => {
    
    return (
        <BrowserRouter>
          <Header name={HEADER_NAME}/>
          <RoutesWrapper />  
          <Footer />
        </BrowserRouter>
    );  
  }

export default App
