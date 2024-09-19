import { CiFaceSmile } from "react-icons/ci"; 
import React, { useState, useEffect } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import styles from './styles.module.css';
import { openCenteredWindow } from '../../../../Shared/openWindowFunc';
import MyProfile  from './Blocks/My Profile/index'
import cn from 'classnames';



const MyAccount: React.FC = () => {


  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isShow, setisShow] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const openClickModal = () => {
    const extensionId = chrome.runtime.id
    const registerUrl = `chrome-extension://${extensionId}/index.html#/register`
    openCenteredWindow(registerUrl, 'Centered Window', 500, 600);
  }

  const goToProfile = () => setisShow (prev => !prev)

  const handleClick = () => {
    if (isAuthenticated) {
      goToProfile();
    } else {
      openClickModal();
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  }


  return (
  <>
  <div className={styles.text}>
    My account
    <div 
    onClick={handleClick}
    className={styles.wrapper}
    >
        <div className={styles.signin}>
            <div className={styles.logo}>
                {isAuthenticated ? <CiFaceSmile /> : <MdOutlineAccountCircle />}
            </div>
            <span>{isAuthenticated ? 'My Profile' : 'Sign in'}</span>
        </div>
    </div>
    <div>
      <div className={cn(styles.myprofileblock, {
        [styles.myprofilelist]: isShow
      })}>
        <>
        <MyProfile 
        />
        </>
      </div>
    </div>
    {/* {isAuthenticated && (
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    )} */}
   </div>
   </>
  )
}

export default MyAccount
