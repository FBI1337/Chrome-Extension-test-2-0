import React from 'react'
import { RxCross2 } from "react-icons/rx"; 
import { CgArrowLeft } from "react-icons/cg"; 
import styles from './styles.module.css'

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void

}



const IncognitoBlock: React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {

    const onClickFn = onToggleIsShow
    const onClickCross = onCloseExstention

  return (
    <div>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.logo}>
                <CgArrowLeft />
            </div>
            <div className={styles.text}>
                Incognito Mode
            </div>
            <div onClick={onClickCross} className={styles.logo}>
                <RxCross2 />
            </div>
        </div>
    </div>
  )
}

export default IncognitoBlock
