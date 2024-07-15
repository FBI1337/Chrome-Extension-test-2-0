import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import RoutesWrapper  from './routes'


const App: React.FC = () => {
    
    return (
        <BrowserRouter>
          <RoutesWrapper /> 
        </BrowserRouter>
    );  
  }

export default App
