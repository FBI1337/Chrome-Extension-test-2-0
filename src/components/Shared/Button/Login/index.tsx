import React from 'react'
import styles from './style.module.css'


type IProps = {
    handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const ButtonLogin: React.FC<IProps> = ({ handleSubmit }) => {

    const onClickFn = handleSubmit

  return (
    <button type="button" onClick={onClickFn} className={styles.button}>
        Login
    </button>
  )
}

export default ButtonLogin