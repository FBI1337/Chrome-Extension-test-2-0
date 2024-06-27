import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Toggle from './components/Toggle';
import Select from './components/Select';
import { FOOTER_NAME, HEADER_NAME, CHOOSE } from './constants';

const App: React.FC = () => {
    const [isActive, setIsactive] = useState(false);
    const [clickAtive, setActive] = useState(false);
  
    const onToggleActive = () => setIsactive(prev => !prev);
    const onSelectActive = () => setActive(click => !click);
    
    return (
      <>
        <Header name={HEADER_NAME}/>
        <div className={styles.selectWrapper}>
          <div className={styles.diveWrapper}>{CHOOSE}</div>
          <Select
            isActive={isActive}
            clickAtive={clickAtive}
            onSelectActive={onSelectActive}
          />
        </div>
        <div className={styles.toggleWrapper}>
           <Toggle 
            isActive={isActive} 
            onToggleActive={onToggleActive} 
          />
        </div>
        <Footer name={FOOTER_NAME}/>
      </>
    );
  }

export default App
