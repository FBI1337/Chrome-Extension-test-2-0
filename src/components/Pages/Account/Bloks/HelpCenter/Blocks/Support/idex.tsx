import React, {useState} from 'react'
import styles from './styles.module.css'
import { BsQuestionCircle } from "react-icons/bs";
import cn from 'classnames'
import SupportList from './List'

const Support:React.FC = () => {

    const [isShow, setisShow] = useState(false) 
    const onToggleIsShow = () => setisShow (prev => !prev)


  return (
    <>
    <div onClick={onToggleIsShow} className={styles.wrapper}>
        <div className={styles.support}>
            <div className={styles.logo}>
                <BsQuestionCircle />
            </div>
            <span>Support</span>
        </div>
    </div>
    <div>
        <div className={cn(styles.supportBlock, {
            [styles.supportList]: isShow
        })}>
            <>
            <SupportList
            />
            </>
        </div>
    </div>
    </>
  )
}

export default Support