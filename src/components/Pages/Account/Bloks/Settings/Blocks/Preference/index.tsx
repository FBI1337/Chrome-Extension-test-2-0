<<<<<<< Updated upstream
import React, { useState } from 'react'
import styles from './styles.module.css'
import { RiEqualizerLine } from "react-icons/ri";
import cn from 'classnames'
import PreferenceList from './components';
=======
import React, { useState} from 'react'
import Header from "../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../constants";
import styles from './styles.module.css'
import {useTheme} from '../../../../../../../layouts/ThemeLayout'
import Toggle from '../../../../../../Shared/Toggle/Toggle new';

>>>>>>> Stashed changes



const Preference: React.FC = () => {

<<<<<<< Updated upstream

  
  const [isShow, setisShow] = useState(false) 

  const onToggleIsShow = () => setisShow (prev => !prev)

  const onCloseExstention = () => {
    window.close();
    console.log('Молодец ты закрыл Расширение!')
  }

  return (
    <>
    <div onClick={onToggleIsShow} className={styles.wrapper}>
        <div className={styles.preference}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
            <span>Preference</span>
=======
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
>>>>>>> Stashed changes
        </div>
    </div>
    <div>
      <div className={cn(styles.preferenceBlock, {
        [styles.preferenceList]: isShow
        })}>
          <>
          <PreferenceList 
          onToggleIsShow={onToggleIsShow} 
          onCloseExstention={onCloseExstention}   
          />
          </>
      </div>
<<<<<<< Updated upstream
    </div>
=======
      </div>
>>>>>>> Stashed changes
    </>
  )
}

export default Preference
