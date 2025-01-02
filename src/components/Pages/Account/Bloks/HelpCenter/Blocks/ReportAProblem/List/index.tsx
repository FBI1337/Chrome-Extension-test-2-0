import React from 'react'
import styles from './styles.module.css'
import Header from '../../../../../../../Shared/Header/secondHeader';
import { HEADER_NAME } from '../../../../../../../../constants';



const ReportProblemList: React.FC = () => {

  return (
    <>
    <Header
    name={HEADER_NAME}
    variant='Report a Problem'
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
