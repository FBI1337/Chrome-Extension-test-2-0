import React from 'react';
import { HashRouter} from 'react-router-dom'
import RoutesWrapper  from './routes'


const App: React.FC = () => {
    
    return (
        <HashRouter>
          <RoutesWrapper /> 
        </HashRouter>
    );  
  }

export default App
