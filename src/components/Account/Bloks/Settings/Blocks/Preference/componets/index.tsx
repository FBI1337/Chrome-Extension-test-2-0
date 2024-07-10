import { CgArrowLeft } from "react-icons/cg"; 
import React from 'react'
import styles from './styles.module.css'
import { HEADER_NAME } from "../../../../../../../constants";

type IProps = {
    onToggleIsShow: () => void
}


const PreferenceList: React.FC<IProps> = ({onToggleIsShow}) => {

    const onClickFn = onToggleIsShow
  return (
    <div>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.logo}>
                <CgArrowLeft />
            </div>
            <div className={styles.text}>
                {HEADER_NAME}
            </div>
        </div>
    </div>
  )
}

export default PreferenceList
