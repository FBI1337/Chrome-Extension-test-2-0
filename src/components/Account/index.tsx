import { BsChatLeftDots } from "react-icons/bs"; 
import { BsQuestionCircle } from "react-icons/bs"; 
import React from 'react'
import styles from './styles.module.css'




const  Account : React.FC = () => {



  return (
    <div className={styles.wrapper}>


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
