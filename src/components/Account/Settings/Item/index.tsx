import React, { useState } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'
import { BsIncognito } from "react-icons/bs"; 
import { RiEqualizerLine } from "react-icons/ri";  

const ItemBlock: React.FC = () => {


    const [isShow, setIsShow] = useState(false)

    const onToggleIsShow = () => setIsShow(prev => !prev)

  return (
    <>
    <div className={styles.blockWrapper} onClick={onToggleIsShow}>
        <div className={cn(styles.preference, {
            [styles.preferenceList]: isShow
        })}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
        <span>Preference</span>
        </div>
    </div>
    <div className={styles.blockWrapper}>
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
