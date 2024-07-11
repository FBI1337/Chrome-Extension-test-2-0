import React from 'react'
import FacebookBlock from './Blocks/Facebook'
import InstagramBlock from './Blocks/Instagram'
import styles from './styles.module.css'

const PopularSites: React.FC = () => {

  const onClickFacebook = () => {
    console.log('Молодец ты открыл Facebook!')
  }

  const onClickInstagram = () => {
    console.log('Молодец ты открыл Instagram!')
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.text}>
            Popular in your region
        </div>
        <div className={styles.block}>
            <FacebookBlock onClickFacebook={onClickFacebook}/>
            <InstagramBlock onClickInstagram={onClickInstagram} />
        </div>
    </div>
  )
}

export default PopularSites
