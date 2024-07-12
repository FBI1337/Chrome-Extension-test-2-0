import React from 'react'
import styles from './styles.module.css'
import PopularSites from './Blocks/Popular sites'
import FavoritesSites from './Blocks/Favorites sites'

const Favorites: React.FC = () => {




  return (
    <div className={styles.wrapper}>
      <FavoritesSites />
      <PopularSites />
    </div>
  )
}

export default Favorites
