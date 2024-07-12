import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Widgets/Header/';
import Footer from './components/Widgets/Footer';
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
