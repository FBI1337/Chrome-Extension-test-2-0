import React, {useState} from 'react'
import styles from './styles.module.css'
import MyAccount from './Bloks/MyAccount'
import Settings from './Bloks/Settings'
import HelpCenter from './Bloks/HelpCenter'




const  Account : React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWindow = () => setIsModalOpen (prev => !prev)

  return (
    <div className={styles.wrapper}>
      <MyAccount
      openModalWindow = {openModalWindow}
      isModalOpen = {isModalOpen}
      />
      <Settings />
      <HelpCenter />
    </div>
  )
}

export default Account
