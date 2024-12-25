import React from 'react'
import styles from './style.module.css'

type IProps = {
    handleLogout: () => void
}

const ButtonOut: React.FC<IProps> = ({ handleLogout }) => {
  return (
    <button onClick={handleLogout} className={styles.logoutbutton}>
        Logout
    </button>
  )
}

export default ButtonOut
