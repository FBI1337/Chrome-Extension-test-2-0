import { MdAccountBox } from "react-icons/md"; 
import { BsStarFill } from "react-icons/bs"; 
import { HiHome } from "react-icons/hi";
// import cn from 'classnames';
// import Home from '../Home'
// import { useState } from 'react';
import React from "react";
import { NavLink } from "react-router-dom";
import styles from './syles.module.css'
// import Favorites from "../Favorites";
// import Account from "../Account";


const Footer: React.FC = ()=> {


  return (
      <div className={styles.wrapper}>
        <NavLink to="favorites">
          <div className={styles.favorites}>
            <BsStarFill />
            <span className={styles.text}>Favorites</span>
          </div>
        </NavLink>
        <NavLink to="">
          <div className={styles.home}>
            <HiHome />
            <span className={styles.text}>Home</span>
          </div>
        </NavLink>
        <NavLink to="account" >
          <div className={styles.account}>
            <MdAccountBox />
            <span className={styles.text}>Account</span>
          </div>
        </NavLink>
      </div>

  )
}

export default Footer

