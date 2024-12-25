import React, { useState} from 'react'
import Header from "../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../constants";
import styles from './styles.module.css'
import { useTheme } from '../../../../../../../layouts/ThemeLayout'
import Toggle from '../../../../../../Shared/Toggle/Toggle new';




const Preference: React.FC = () => {

  const { theme, toggleTheme } = useTheme();

  const [isActive, setIsactive] = useState(false);
  
  const onToggleActive = () => setIsactive(prev => !prev);
  
  const handeleToggle = () => {
    onToggleActive();
    toggleTheme();
    theme;
};

  return (
    <>
      <Header 
      name={HEADER_NAME}
      variant='Preference'
      />
      <div className={styles.wrapper}>
      <div className={styles.block}>
        <div>
          Dark Mode
        </div>
        <div className={styles.button}>
        <Toggle isActive={isActive} onToggleActive={onToggleActive} handeleToggle={handeleToggle} />
        </div>
      </div>
      </div>
    </>
  )
}

export default Preference
