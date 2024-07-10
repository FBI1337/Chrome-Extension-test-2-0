import React from 'react'
import styles from './styles.module.css'

type IProps = {
    onToggleIsShow: () => void
}


const PreferenceList: React.FC<IProps> = ({onToggleIsShow}) => {

    const onClickFn = onToggleIsShow
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <div onClick={onClickFn} className={styles.block}>
            close
            </div>
            <div className={styles.list}>
                Ты Гей
            </div>
        </div>
    </div>
  )
}

export default PreferenceList
