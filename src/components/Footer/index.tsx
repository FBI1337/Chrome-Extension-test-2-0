import { MdAccountBox } from "react-icons/md"; 
import { BsStarFill } from "react-icons/bs"; 
import { HiHome } from "react-icons/hi"; 
import React from 'react';
import styles from './syles.module.css'

type IProps = {
    name: string
}

const Footer: React.FC<IProps> = ()=> {
  return (
    // <div className={styles.wrapper}>
    //     <div className={styles.content}>
    //         {name}
    //     </div>
    // </div>

    <div className={styles.wrapper}>
      <div className={styles.favorites}>
        <BsStarFill />
        <span>Favorites</span>
      </div>
      <div className={styles.home}>
        <HiHome />
      </div>
      <div className={styles.account}>
        <MdAccountBox />
        <span>Account</span>
      </div>
    </div>
  )
}

export default Footer

