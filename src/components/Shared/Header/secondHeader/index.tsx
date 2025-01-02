import React from 'react'
import styles from './styles.module.css'
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 
import { useNavigate } from 'react-router-dom';

type IProps = {
    name: string
    variant: 'Preference' | 'Support' | 'Report a Problem' | 'My Profile' | 'Support Chat'
}

const Header: React.FC<IProps> = ({ name,  variant }) => {

  const navigate = useNavigate ();

    const onClickFn = () => {
      navigate ('/account')
    }
    
    const onClickCross = () => {
      window.close();
    }

  return (
    <div className={styles.wrapper}>
    <div className={styles.top}>
    <div onClick={onClickFn} className={styles.logo}>
    <CgArrowLeft />
    </div>
    <div className={styles.box}>
    <div className={styles.customfonts}>
        {name}
    </div>
    <div className={styles.customfonts}>{variant}</div>
    </div>
    <div onClick={onClickCross} className={styles.logo}>
    <RxCross2 />
    </div>
    </div>
    </div>
  )
}

export default Header
