import React from 'react'
import styles from './styles.module.css'

type IProps = {
    handleLogout: () => void;
}

const Button: React.FC<IProps> = ({ handleLogout }) => {
  return (
  <button onClick={handleLogout} className={styles.logoutButton}>
    Logout
  </button>
  )
}

export default Button
