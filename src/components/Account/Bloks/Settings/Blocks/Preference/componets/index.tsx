import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 
import React from 'react'
import styles from './styles.module.css'
import { HEADER_NAME } from "../../../../../../../constants";

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void
}


const PreferenceList: React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {

    const onClickFn = onToggleIsShow
    const onClickCross = onCloseExstention



  return (
    <div>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.logo}>
                <CgArrowLeft />
            </div>
            <div className={styles.text}>
                {HEADER_NAME}
            </div>
            <div onClick={onClickCross} className={styles.logo}>
                <RxCross2 />
            </div>
        </div>
    </div>
  )
}

export default PreferenceList
