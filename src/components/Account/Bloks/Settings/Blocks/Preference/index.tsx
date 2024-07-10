import React, { useState } from 'react'
import styles from './styles.module.css'
import { RiEqualizerLine } from "react-icons/ri";
import cn from 'classnames'
import PreferenceList from './componets';



const Preference: React.FC = () => {


  
  const [isShow, setisShow] = useState(false) 

  const onToggleIsShow = () => setisShow (prev => !prev)
  return (
    <>
    <div onClick={onToggleIsShow} className={styles.wrapper}>
        <div className={styles.preference}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
            <span>Preference</span>
        </div>
    </div>
    <div>
      <div className={cn(styles.preferenceBlock, {
        [styles.preferenceList]: isShow
        })}>
          <>
          <PreferenceList onToggleIsShow={onToggleIsShow}/>
          </>
      </div>
    </div>
    </>
  )
}

export default Preference
