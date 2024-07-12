import React from 'react'
import styles from './styles.module.css'
import FavoritesList from './Bloks/Favorites List'

const FavoritesSites: React.FC = () => {

  const onClickInformation = () => {
    console.log ('Тут что-то будет!')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        My Favorites sites
      </div>
      <div className={styles.block}>
        <FavoritesList onClickInformation={onClickInformation}/>
      </div>
    </div>
  )
}

export default FavoritesSites
