import { FaFacebook } from "react-icons/fa"; 
import React from 'react'
import styles from './styles.module.css'

type IProps = {
  onClickFacebook: () => void
}


const FacebookBlock: React.FC<IProps> = ({onClickFacebook}) => {
  return (
    <div className={styles.wrapper} onClick={onClickFacebook}>
        <div className={styles.logo}>
            <FaFacebook />
        </div>
        <div className={styles.text}>
            Facebook
        </div>
    </div>
  )
}

export default FacebookBlock
