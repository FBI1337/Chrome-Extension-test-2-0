import React from 'react'
import styles from './styles.module.css'
import ItemBlock from './Item'


const HelpCenter: React.FC = () => {
  return (
    <div className={styles.text}>
        Help center
        <ItemBlock />
    </div>
  )
}

export default HelpCenter
