// import { MdAccountBox } from "react-icons/md"; 
import { BsStarFill } from "react-icons/bs"; 
import { HiHome } from "react-icons/hi";
// import cn from 'classnames';
// import Home from '../Home'
// import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import styles from './syles.module.css'
// import Favorites from "../Favorites";
// import Account from "../Account";


const Footer: React.FC = ()=> {

  // const [isShow, setIsShow] = useState(false);

  // const onToggleIsShow = () => setIsShow(prev => !prev);

  return (
      <div className={styles.wrapper}>
        <Link to="">
        <HiHome />
        </Link>
        <Link to="account">
        <BsStarFill />
        </Link>
      </div>

    // <div className={styles.wrapper}>
    //   <div className={styles.favorites} onClick={onToggleIsShow}>
    //     <BsStarFill />
    //     <span>Favorites</span>
    //     <div className={cn(styles.listWrapper, {
    //       [styles.showListWrapper]: isShow
    //     })}>
    //       <Favorites />
    //     </div>
    //   </div>
      
        

      // </div>
    //   <div className={styles.account} onClick={onToggleIsShow}>
    //     <MdAccountBox />
    //     <span>Account</span>
    //     <div className={cn(styles.listWrapper, {
    //       [styles.showListWrapper]: isShow
    //     })}>
    //       <Account />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Footer

