import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Toggle from './components/Toggle';
import Select from './components/Select';
import { HEADER_NAME } from './constants';

const App: React.FC = () => {
    const [isActive, setIsactive] = useState(false);
  
    const onToggleActive = () => setIsactive(prev => !prev);
    
    return (
      <div className={styles.wrapper}>
        <Header name={HEADER_NAME}/>
        <Select />   
        <Toggle isActive={isActive} onToggleActive={onToggleActive} />
        <Footer />
      </div>    
    );
  }

export default App
