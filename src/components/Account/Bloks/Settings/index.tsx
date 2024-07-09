import React from 'react'
import styles from './styles.module.css'
import Preference from './Blocks/Preference'
import IncognitoMode from './Blocks/IncognitoMode'



const Settings: React.FC = () => {


  return (
  <div className={styles.text}> 
    Settings
    <Preference />
    <IncognitoMode />
  </div>
  )
}

export default Settings
