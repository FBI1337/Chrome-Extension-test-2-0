import { BsFlower3 } from "react-icons/bs"; 
import React from 'react'
import styles from './styles.module.css'

type IProps = {
    onClickChatGPT: () => void 
}

const ChatGPTBlock: React.FC<IProps> = ({onClickChatGPT}) => {
  return (
    <div className={styles.wrapper} onClick={onClickChatGPT}>
        <div className={styles.logo}>
            <BsFlower3 />
        </div>
        <div className={styles.text}>
            ChatGPT
        </div>
    </div>
  )
}

export default ChatGPTBlock
