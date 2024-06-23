import { useState } from 'react'
import './App.css'

function App() {

    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
        <div className="toggle">
          <span className={`text ${isOn ? 'text-on' : 'text-off'}`} >{isOn ? 'on' : 'off'}</span>
        </div>
      </div>
    );
  }

export default App
