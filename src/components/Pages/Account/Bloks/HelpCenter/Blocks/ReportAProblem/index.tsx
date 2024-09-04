import React, { useState } from 'react'
import styles from './styles.module.css'
import { BsChatLeftDots } from "react-icons/bs";
import cn from 'classnames'
import ReportProblemList from './components';

const ReportProblem: React.FC = () => {
    
    const [isShow, setisShow] = useState(false) 
    const onToggleIsShow = () => setisShow (prev => !prev)
    const onCloseExstention = () => {
    window.close();
    console.log('Молодец ты закрыл Расширение!')
}

  return (
    <>
    <div onClick={onToggleIsShow} className={styles.wrapper}>
        <div className={styles.report}>
            <div className={styles.logo}>
                <BsChatLeftDots />
            </div>
            <span>Report a problem</span>
        </div>
    </div>
    <div>
        <div className={cn(styles.reportBlock, {
            [styles.reportList]: isShow
        })}>
            <>
            <ReportProblemList
            onToggleIsShow={onToggleIsShow}
            onCloseExstention={onCloseExstention}
            />
            </>
        </div>
    </div>
    </>
  )
}

export default ReportProblem 