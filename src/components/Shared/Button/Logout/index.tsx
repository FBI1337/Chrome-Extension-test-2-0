import React from 'react'
import styles from './style.module.css'

type IProps = {
    handleLogout: () => void
}

const ButtonOut: React.FC<IProps> = ({ handleLogout }) => {

    const Out = handleLogout

  return (
    <button onClick={Out} className={styles.logoutbutton}>
        Logout
    </button>
  )
}

export default ButtonOut
