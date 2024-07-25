import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import styles from './styles.module.css';
import { openCenteredWindow } from '../../../../Shared/openWindowFunc';

const MyAccount: React.FC = () => {

  const openClickModal = () => {
    const extensionId = chrome.runtime.id
    const registerUrl = `chrome-extension://${extensionId}/index.html#/register`
    openCenteredWindow(registerUrl, 'Centered Window', 500, 600);
  }



  return (
  <>
  <div className={styles.text}>
    My account
    <div onClick={openClickModal} className={styles.wrapper}>
        <div className={styles.signin}>
            <div className={styles.logo}>
                <MdOutlineAccountCircle />
            </div>
            <span>Sign in</span>
        </div>
    </div>
   </div>
   </>
  )
}

export default MyAccount
