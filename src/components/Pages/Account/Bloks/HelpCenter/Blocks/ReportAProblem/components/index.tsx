import React from 'react'
import styles from './styles.module.css'
import Header from './Header';
import { HEADER_NAME } from '../../../../../../../../constants';

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void
}


const ReportProblemList: React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {

  return (
    <>
    <Header
    name={HEADER_NAME}
    onToggleIsShow={onToggleIsShow}
    onCloseExstention={onCloseExstention}
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

export default ReportProblemList
