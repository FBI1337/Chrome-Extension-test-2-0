import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import styles from './styles.module.css';

const MyAccount: React.FC = () => {
  return (
  <div className={styles.text}>
    My account
    <div className={styles.wrapper}>
        <div className={styles.signin}>
            <div className={styles.logo}>
                <MdOutlineAccountCircle />
            </div>
            <span>Sign in</span>
        </div>
    </div>
   </div>
  )
}

export default MyAccount
