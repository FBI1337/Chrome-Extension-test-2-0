import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header';
import { HEADER_NAME } from './constants';
import Toggle from './components/Toggle';

const App: React.FC = () => {
    const [isActive, setIsactive] = useState(false);
  
    const onToggleActive = () => setIsactive(prev => !prev);
    
    return (
      <>
        <Header name={HEADER_NAME}/>
        <div className={styles.toggleWrapper}>
           <Toggle 
            isActive={isActive} 
            onToggleActive={onToggleActive} 
          />
        </div>
      </>
    );
  }

export default App
