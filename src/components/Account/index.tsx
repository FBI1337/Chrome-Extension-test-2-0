import { MdOutlineAccountCircle } from "react-icons/md"; 
import React from 'react'
import styles from './styles.module.css'




const  Account : React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <div>
        My account
        <div className={styles.login}>
          <div className={styles.logo}>
            <MdOutlineAccountCircle />
            Sign in
          </div>
        </div>
        <div>
          Что-то еще
        </div>
      </div>
    </div>
  )
}

export default Account
