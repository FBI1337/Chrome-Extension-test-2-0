import React from 'react'
import Header from "../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../constants";
import styles from './styles.module.css'
import Toggle from '../../../../../../Shared/Toggle/Toggle new';




const Preference: React.FC = () => {


  return (
    <>
      <Header 
      name={HEADER_NAME}
      variant='Preference'
      />
      <div className={styles.wrapper}>
      <div className={styles.block}>
        <div>
          Dark Mode
        </div>
        <div className={styles.button}>
        <Toggle />
        </div>
      </div>
      </div>
    </>
  )
}

export default Preference
