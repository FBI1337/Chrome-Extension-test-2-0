import { BsInstagram } from "react-icons/bs"; 
import React from 'react'
import styles from './styles.module.css'

type IProps = {
  onClickInstagram: () => void
}


const InstagramBlock: React.FC<IProps> = ({onClickInstagram}) => {
  return (
    <div className={styles.wrapper} onClick={onClickInstagram}>
        <div className={styles.logo}>
            <BsInstagram />
        </div>
        <div className={styles.text}>
            Instagram
        </div>      
    </div>
  )
}

export default InstagramBlock
