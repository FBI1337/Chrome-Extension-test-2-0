import React, {useEffect, useState} from 'react'
import Header from "../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../constants";
import styles from './styles.module.css'
import Toggle from '../../../../../../Shared/Toggle/Toggle new';
import ThemeProvider, { useTheme } from '../../../../../../../layouts/ThemeLayout'
import { useNavigate } from 'react-router-dom';




const Preference: React.FC = () => {

  const navigate = useNavigate ();

  const { theme, toggleTheme } = useTheme();

  const [isActive, setIsactive] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  
  const onToggleActive = () => setIsactive(prev => !prev);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handeleToggle = () => {
    onToggleActive();
    toggleTheme();
    theme;
};

  return (
    <>
    <ThemeProvider>
    <div className={`${styles.wrapper} ${isVisible ? styles.show : ''}`}>
      <Header 
      name={HEADER_NAME}
      variant='Preference'
      />
      <div className={styles.block}>
        <div>
          Dark Mode
        </div>
        <div className={styles.button}>
        <Toggle isActive={isActive} onToggleActive={onToggleActive} handeleToggle={handeleToggle}/>
        </div>
      </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default Preference
