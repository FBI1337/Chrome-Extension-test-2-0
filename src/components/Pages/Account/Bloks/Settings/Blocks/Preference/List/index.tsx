import React from 'react'
import Header from "../../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../../constants";
import styles from './styles.module.css'

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
    variant='Preference'
    />
    <div className={styles.wrapper}>
        
    </div>
    </>
  )
}

export default PreferenceList
