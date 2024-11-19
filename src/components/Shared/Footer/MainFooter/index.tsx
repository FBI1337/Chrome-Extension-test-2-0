import { MdAccountBox } from "react-icons/md"; 
import { BsStarFill } from "react-icons/bs"; 
import { HiHome } from "react-icons/hi";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './syles.module.css'
import cn from 'classnames'


const Footer: React.FC = ()=> {


  const [activeLink, setActiveLink] = useState<string>('/home')

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link === activeLink ? '' : link);
  };

  return (
      <div className={styles.wrapper}>
        <NavLink to="/favorites" onClick={() => handleSetActiveLink('/favorites')}>
          <div className={cn(styles.favorites, {
            [styles.active]: activeLink === '/favorites'
          })}>
            <BsStarFill />
            <span>Favorites</span>
          </div>
        </NavLink>
        <NavLink to="/" onClick={() => handleSetActiveLink('/home')}>
          <div className={cn(styles.home, {
            [styles.active]: activeLink === '/home'
          })}>
            <HiHome />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/account" onClick={() => handleSetActiveLink('/account')}>
          <div className={cn(styles.account, {
            [styles.active]: activeLink === '/account'
          })}>
            <MdAccountBox />
            <span>Account</span>
          </div>
        </NavLink>
      </div>

  )
}

export default Footer

