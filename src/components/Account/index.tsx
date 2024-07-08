import { BsChatLeftDots } from "react-icons/bs"; 
import { BsQuestionCircle } from "react-icons/bs"; 
import { BsIncognito } from "react-icons/bs"; 
import { RiEqualizerLine } from "react-icons/ri"; 
import { MdOutlineAccountCircle } from "react-icons/md"; 
import React from 'react'
import styles from './styles.module.css'




const  Account : React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        My account
        <div className={styles.blockWrapper}>
          <div className={styles.signin}>
            <div className={styles.logo}>
              <MdOutlineAccountCircle />
            </div>
            <span>Sign in</span>
          </div>
        </div>
      </div>
      <div className={styles.text}> 
        Settings
        <div className={styles.blockWrapper}>
          <div className={styles.preference}>
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
      </div>
      <div className={styles.text}>
        Help center
        <div className={styles.blockWrapper}>
          <div className={styles.support}>
            <div className={styles.logo}>
              <BsQuestionCircle />
            </div>
            <span>Support</span>
          </div>
        </div>
        <div className={styles.blockWrapper}>
          <div className={styles.report}>
            <div className={styles.logo}>
              <BsChatLeftDots />
            </div>
            <span>Report a problem</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
