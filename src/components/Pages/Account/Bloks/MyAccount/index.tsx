import { CiFaceSmile } from "react-icons/ci"; 
import React, { useState, useEffect } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import styles from './styles.module.css';
import { openCenteredWindow } from '../../../../Shared/openWindowFunc';
import { useNavigate } from 'react-router-dom';


const MyAccount: React.FC = () => {

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const openClickModal = () => {
    const extensionId = chrome.runtime.id
    const loginUrl = `chrome-extension://${extensionId}/index.html#/login`
    openCenteredWindow(loginUrl, 'Centered Window', 600, 500);
  }

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/myprofile');
    } else {
      openClickModal();
    }
  };

  return (
  <>
    <div className={styles.text}>
      My account
      <div onClick={handleClick} className={styles.wrapper}>
          <div className={styles.signin}>
              <div className={styles.logo}>
                  {isAuthenticated ? <CiFaceSmile /> : <MdOutlineAccountCircle />}
              </div>
              <span>{isAuthenticated ? 'My Profile' : 'Sign in'}</span>
          </div>
      </div>
    </div>
  </>
  )
}

export default MyAccount
