import React from 'react'
import styles from './style.module.css'

type IProps = {
    handleSubmit: (e: React.FormEvent) => Promise<void>;
}


const ButtonSign: React.FC<IProps> = ({ handleSubmit }) => {

  const onClickFn = handleSubmit
    
  return (
    <button type="button" onClick={onClickFn} className={styles.button}>
      Sign In
    </button>
  )
}

export default ButtonSign
