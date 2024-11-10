import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 
import React from 'react'
import styles from './styles.module.css'
import Header from "../../../../../../../Shared/modelHeader";
import { HEADER_NAME } from "../../../../../../../../constants";

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void
}



const PreferenceList: React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {

    const onClickFn = onToggleIsShow
    const onClickCross = onCloseExstention



  return (
    <>
    <Header name={HEADER_NAME}/>
        <div className={styles.text}>
            Preference
        </div>
    <div>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.logo}>
                <CgArrowLeft />
            </div>
            <div className={styles.text}>
                Preference
            </div>
            <div onClick={onClickCross} className={styles.logo}>
                <RxCross2 />
            </div>
        </div>
    </div>
    </>
  )
}

export default PreferenceList
