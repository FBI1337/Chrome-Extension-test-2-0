import { useState } from 'react'
import './App.css'

function App() {

    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
        <div className="toggle"></div>
      </div>
    );
  }

export default App
