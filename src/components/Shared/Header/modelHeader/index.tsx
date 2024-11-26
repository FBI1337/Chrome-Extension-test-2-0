import React from 'react'
import styles from './style.module.css'

type IProps = {
    name: string
}

const Header:React.FC<IProps> = ({ name }) => {


  return (
    <div className={styles.wrapper}>
    <div className={styles.customfonts}>
        {name}
    </div>
    </div>
  )
}

export default Header
