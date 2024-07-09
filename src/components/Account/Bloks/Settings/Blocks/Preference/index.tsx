import React from 'react'
import styles from './styles.module.css'
import { RiEqualizerLine } from "react-icons/ri";

const Preference: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.preference}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
        <span>Preference</span>
        </div>
    </div>
  )
}

export default Preference
