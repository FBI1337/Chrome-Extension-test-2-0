import React from 'react'
import styles from './styles.module.css'
import { BsIncognito } from "react-icons/bs"; 
import { RiEqualizerLine } from "react-icons/ri";  

const ItemBlock: React.FC = () => {

  return (
    <>
    <div className={styles.wrapper}>
        <div className={styles.preference}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
        <span>Preference</span>
        </div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.incognito}>
        <div className={styles.logo}>
          <BsIncognito />
        </div>
        <span>Incognito mode</span>
      </div>
    </div>
    </>
  )
}

export default ItemBlock
