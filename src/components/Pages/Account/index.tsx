import React from 'react'
import styles from './styles.module.css'
import MyAccount from './Bloks/MyAccount'
import Settings from './Bloks/Settings'
import HelpCenter from './Bloks/HelpCenter'

const  Account : React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <MyAccount />  
      <Settings />
      <HelpCenter />
    </div>
  )
}

export default Account
