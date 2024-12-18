import React from 'react'
import { RiEqualizerLine } from "react-icons/ri";
import IncognitoMode from './Blocks/IncognitoMode'
import styles from './styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames'
import Preference from './Blocks/Preference';



const Settings: React.FC = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const isShow = location.pathname === '/preference';

  const onToggleIsShow = () => {
    if (isShow) {
      navigate(-1);
    } else {
      navigate('/preference')
    }
  };

  return (
  <div className={styles.text}> 
    Settings

    <div onClick={onToggleIsShow} className={styles.wrapper}>
        <div className={styles.preference}>
            <div className={styles.logo}>
                <RiEqualizerLine />
            </div>
            <span>Preference</span>
        </div>
    </div>

    <div 
    className={cn(styles.preferenceBlock, {
      [styles.show]: isShow,
    })}
    >
      <Preference />
    </div>

    <IncognitoMode />
  </div>
  )
}

export default Settings
