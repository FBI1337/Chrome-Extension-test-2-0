import React from 'react'
import styles from './styles.module.css'
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg";

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void
}

const SupportList:React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {

    const onClickFn = onToggleIsShow
    const onClickCross = onCloseExstention

  return (
    <div>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.logo}>
                <CgArrowLeft />
            </div>
            <div className={styles.text}>
                Support
            </div>
            <div onClick={onClickCross} className={styles.logo}>
                <RxCross2 />
            </div>
        </div>
    </div>
  )
}

export default SupportList
