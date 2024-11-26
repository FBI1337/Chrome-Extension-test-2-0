import React from 'react'
import styles from './styles.module.css'
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 

type IProps = {
    name: string
    onToggleIsShow: () => void
    onCloseExstention: () => void
    variant: 'Preference' | 'Support' | 'Report a Problem' | 'My Profile'
}

const Header: React.FC<IProps> = ({ name, onCloseExstention, onToggleIsShow, variant }) => {


    const onClickFn = onToggleIsShow
    const onClickCross = onCloseExstention

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
    <div className={styles.text}>{variant}</div>
    </div>
    <div onClick={onClickCross} className={styles.logo}>
    <RxCross2 />
    </div>
    </div>
    </div>
  )
}

export default Header
