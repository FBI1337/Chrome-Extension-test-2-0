import React from 'react'
import styles from './styles.module.css'
import Header from '../../../../../../Shared/Header/secondHeader'
import { HEADER_NAME } from '../../../../../../../constants'

const ReportProblem: React.FC = () => {

  return (
    <>
    <Header 
    name={HEADER_NAME}
    variant='Report a Problem'
    />
    <div className={styles.wrapper}>
        Херня какая-то
    </div>
    </>
  )
}

export default ReportProblem 