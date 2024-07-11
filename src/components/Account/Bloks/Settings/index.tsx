import React from 'react'
import Preference from './Blocks/Preference'
import IncognitoMode from './Blocks/IncognitoMode'
import styles from './styles.module.css'



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
