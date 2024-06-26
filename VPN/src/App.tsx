import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header';

function App() {

    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };

    const carenType = isOn ? 'styles.on' : 'styles.off'
    const carenText = isOn ? 'text-on' : 'text-off'

    return (
      <>
      <div className={styles.vrapper}>
        <Header  name="VPN Service"/>
      </div>
        <div className={styles.hard}>
          <div className={styles.switch, carenType} onClick={handleToggle}>
            <div className={styles.toggle}>
              <span className={`styles.text ${carenText}`} >{carenType}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

export default App
