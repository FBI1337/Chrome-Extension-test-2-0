import React from 'react'
import styles from './style.module.css'

type IProps = {
    handleSubmit: () => void;
}


const ButtonSign: React.FC<IProps> = ({ handleSubmit }) => {
    
  return (
    <div onClick={handleSubmit} className={styles.button}>
        Sign In
    </div>
  )
}

export default ButtonSign
