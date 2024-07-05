import { MdAccountBox } from "react-icons/md"; 
import { BsStarFill } from "react-icons/bs"; 
import { HiHome } from "react-icons/hi";
import cn from 'classnames';
import Home from '../Home'
import React, { useState } from 'react';
import styles from './syles.module.css'


const Footer: React.FC = ()=> {

  const [isShow, setIsShow] = useState(false);

  const onToggleIsShow = () => setIsShow(prev => !prev);

  return (

    <div className={styles.wrapper}>
      <div className={styles.favorites} >
        <BsStarFill />
        <span>Favorites</span>
      </div>
      <div className={styles.home}>
        <HiHome 
        onClick={onToggleIsShow}
        />
        <div className={cn(styles.listWrapper, {
          [styles.showListWrapper]: isShow
        })}>
          <Home />
        </div>
      </div>
      <div className={styles.account}>
        <MdAccountBox />
        <span>Account</span>
      </div>
    </div>
  )
}

export default Footer

