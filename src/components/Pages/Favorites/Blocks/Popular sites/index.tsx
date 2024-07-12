import React from 'react'
import FacebookBlock from './Blocks/Facebook'
import InstagramBlock from './Blocks/Instagram'
import styles from './styles.module.css'
import ChatGPTBlock from './Blocks/ChatGPT'

const PopularSites: React.FC = () => {

  const onClickFacebook = () => {
    console.log('Молодец ты открыл Facebook!')
    window.open ('https://www.facebook.com', '_blank')
  }

  const onClickInstagram = () => {
    console.log('Молодец ты открыл Instagram!')
    window.open ('https://www.instagram.com/', '_blank')
  }

  const onClickChatGPT = () => {
    console.log('Молодец ты открыл ChatGPT!')
    window.open ('https:https://chatgpt.com/', '_blank')
  }


  return (
    <div className={styles.wrapper}>
        <div className={styles.text}>
            Popular in your region
        </div>
        <div className={styles.block}>
            <FacebookBlock onClickFacebook={onClickFacebook} />
            <InstagramBlock onClickInstagram={onClickInstagram} />
            <ChatGPTBlock onClickChatGPT={onClickChatGPT} />
        </div>
    </div>
  )
}

export default PopularSites
