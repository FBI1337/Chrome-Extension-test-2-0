import React from 'react'
import { RiEqualizerLine } from "react-icons/ri";
import IncognitoMode from './Blocks/IncognitoMode'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';



const Settings: React.FC = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate ('/preference')
  }

  return (
  <div className={styles.text}> 
    Settings
    <div onClick={onClick} className={styles.wrapper}>
        <div className={styles.preference}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
            <span>Preference</span>
        </div>
    </div>
    <IncognitoMode />
  </div>
  )
}

export default Settings
