import React from 'react'
import styles from './styles.module.css'

type IProps = {
  onClickInformation: () => void
}



const FavoritesList: React.FC<IProps> = ({onClickInformation}) => {

  return (
    <div onClick={onClickInformation} className={styles.wrapper}>
      Тут что-то будет
    </div>
  )
}

export default FavoritesList
