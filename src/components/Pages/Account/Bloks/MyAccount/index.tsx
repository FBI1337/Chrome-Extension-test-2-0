import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import styles from './styles.module.css';

type IProps = {
  openModalWindow: () => void
  isModalOpen: boolean
}

const MyAccount: React.FC<IProps> = ({ openModalWindow, isModalOpen }) => {

  const onClickFn = openModalWindow

  return (
  <>
  <div className={styles.text}>
    My account
    <div onClick={onClickFn} className={styles.wrapper}>
        <div className={styles.signin}>
            <div className={styles.logo}>
                <MdOutlineAccountCircle />
            </div>
            <span>Sign in</span>
        </div>
    </div>
   </div>
   <div>

   </div>
   </>
  )
}

export default MyAccount
