import React from 'react'
<<<<<<< HEAD
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
=======
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 
import styles from './style.module.css'


type IProps = {
    name: string
    onCloseExstention: () => void
    onToggleIsShow: () => void

}

const Header: React.FC<IProps> = ({ name, onCloseExstention, onToggleIsShow}) => {
>>>>>>> 4415d8779ef498d8efb49bf1a62fcafd6b8f4c4c


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
<<<<<<< HEAD
    <div className={styles.text}>{variant}</div>
=======
    <div className={styles.text}>Support</div>
>>>>>>> 4415d8779ef498d8efb49bf1a62fcafd6b8f4c4c
    </div>
    <div onClick={onClickCross} className={styles.logo}>
    <RxCross2 />
    </div>
    </div>
    </div>
  )
}

export default Header
