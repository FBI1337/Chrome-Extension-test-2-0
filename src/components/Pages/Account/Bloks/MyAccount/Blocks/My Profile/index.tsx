import React from 'react'
import styles from './styles.module.css'
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 

type IProps = {
  goToProfile: () => void;
  onCloseExstention: () => void;
  handleLogout: () => void;
}

const MyProfile: React.FC<IProps> = ({ goToProfile, onCloseExstention, handleLogout }) => {

  const onClickFn = goToProfile;
  const onClickCross = onCloseExstention;

  return (
    <div>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.logo}>
                <CgArrowLeft />
            </div>
            <div className={styles.text}>
                My Profile
            </div>
            <div onClick={onClickCross} className={styles.logo}>
                <RxCross2 />
            </div>
        </div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
    </div>
  )
}

export default MyProfile