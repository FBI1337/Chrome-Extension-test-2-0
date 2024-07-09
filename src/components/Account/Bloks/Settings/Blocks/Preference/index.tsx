import React, { useState } from 'react'
import styles from './styles.module.css'
import { RiEqualizerLine } from "react-icons/ri";
import cn from 'classnames'



const Preference: React.FC = () => {


  
  const [isShow, setisShow] = useState(false) 

  const onToggleIsShow = () => setisShow (prev => !prev)
  return (
    <div  className={styles.wrapper}>
        <div onClick={onToggleIsShow} className={cn(styles.preference, {
          [styles.preferenceList]: isShow
          })}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
        <span className={styles.text}>Preference</span>
        </div>
    </div>
  )
}

export default Preference
