import React from 'react'
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 
import styles from './style.module.css'


type IProps = {
    name: string
    onCloseExstention: () => void
    onToggleIsShow: () => void

}

const Header: React.FC<IProps> = ({ name, onCloseExstention, onToggleIsShow}) => {


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
    <div className={styles.text}>Support</div>
    </div>
    <div onClick={onClickCross} className={styles.logo}>
    <RxCross2 />
    </div>
    </div>
    </div>
  )
}

export default Header
