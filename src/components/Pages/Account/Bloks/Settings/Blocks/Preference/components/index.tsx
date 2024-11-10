import React from 'react'
import styles from './styles.module.css'
import Header from "../components/Header/index";
import { HEADER_NAME } from "../../../../../../../../constants";

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void
}



const PreferenceList: React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {


  return (
    <>
    <Header 
    name={HEADER_NAME}
    onCloseExstention={onCloseExstention}
    onToggleIsShow={onToggleIsShow}
    />
    <div>
        <div className={styles.header}>
            <div className={styles.logo}>
            </div>
            <div className={styles.logo}>
            </div>
        </div>
    </div>
    </>
  )
}

export default PreferenceList
