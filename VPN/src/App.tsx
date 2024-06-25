import { useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {

    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <>
      <Header  name="VPN Service"/>
      <div className='hard'>
        <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
          <div className="toggle">
            <span className={`text ${isOn ? 'text-on' : 'text-off'}`} >{isOn ? 'on' : 'off'}</span>
          </div>
        </div>
      </div>
      </>
    );
  }

export default App
