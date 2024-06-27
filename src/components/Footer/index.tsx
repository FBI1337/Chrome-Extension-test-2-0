import React from 'react';
import styles from './syles.module.css'

type IProps = {
    name: string
}

const Footer: React.FC<IProps> = ({ name })=> {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            {name}
        </div>
    </div>
  )
}

export default Footer

