import React from 'react'
import styles from './styles.module.css'
import ReportProblem from './Blocks/ReportAProblem'
import Support from './Blocks/Support/idex'


const HelpCenter: React.FC = () => {
  return (
    <div className={styles.text}>
        Help center
        <Support/>
        <ReportProblem/>
    </div>
  )
}

export default HelpCenter
