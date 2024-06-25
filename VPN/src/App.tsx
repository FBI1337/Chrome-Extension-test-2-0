import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header';

function App() {

    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <>
      <div className={styles.vrapper}>
        <Header  name="VPN Service"/>
      </div>
        <div className={styles.hard}>
          <div className={`styles.switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
            <div className={styles.toggle}>
              <span className={`styles.text ${isOn ? 'text-on' : 'text-off'}`} >{isOn ? 'on' : 'off'}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

export default App
