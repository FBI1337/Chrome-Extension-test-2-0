// import { MdAccountBox } from "react-icons/md"; 
// import { BsStarFill } from "react-icons/bs"; 
import { HiHome } from "react-icons/hi";
import cn from 'classnames';
// import Home from '../Home'
import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './syles.module.css'
// import Favorites from "../Favorites";
// import Account from "../Account";


const Footer: React.FC = ()=> {

  const [isShow, setIsShow] = useState(false);

  const onToggleIsShow = () => setIsShow(prev => !prev);

  return (

    <ul>
        <Link to="home">
        <div className={styles.home} onClick={onToggleIsShow}>
        <HiHome/>
        <div className={cn(styles.listWrapper, {
          [styles.showListWrapper]: isShow
        })}>
        </div>
        </div>
        </Link>
    </ul>

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

