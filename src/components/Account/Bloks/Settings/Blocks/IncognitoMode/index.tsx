import React from 'react'
import styles from './styles.module.css'
import { BsIncognito } from "react-icons/bs";   

const IncognitoMode: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.incognito}>
        <div className={styles.logo}>
          <BsIncognito />
        </div>
        <span>Incognito mode</span>
      </div>
    </div>
  )
}

export default IncognitoMode
