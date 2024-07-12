import React from 'react'
import styles from './styles.module.css'
import { BsChatLeftDots } from "react-icons/bs"; 
import { BsQuestionCircle } from "react-icons/bs";

const ItemBlock: React.FC = () => {
  return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.support}>
                    <div className={styles.logo}>
                        <BsQuestionCircle />
                    </div>
                    <span>Support</span>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.report}>
                    <div className={styles.logo}>
                        <BsChatLeftDots />
                    </div>
                    <span>Report a problem</span>
                </div>
            </div>
  </>
  )
}

export default ItemBlock
