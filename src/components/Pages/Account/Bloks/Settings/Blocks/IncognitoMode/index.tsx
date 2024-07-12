import React, {useState} from 'react'
import styles from './styles.module.css'
import cn from 'classnames'
import { BsIncognito } from "react-icons/bs";
import IncognitoBlock from './components';

const IncognitoMode: React.FC = () => {

  const [isShow, setisShow] = useState(false) 

  const onToggleIsShow = () => setisShow (prev => !prev)

  const onCloseExstention = () => {
    window.close();
    console.log('Молодец ты закрыл Расширение!')
  }

  return (
    <>
    <div onClick={onToggleIsShow} className={styles.wrapper}>
      <div className={styles.incognito}>
        <div className={styles.logo}>
          <BsIncognito />
        </div>
        <span>Incognito mode</span>
      </div>
    </div>
    <div>
      <div className={cn(styles.incognitoBlock, {
        [styles.incognitoList]: isShow
      })}>
        <>
        <IncognitoBlock
        onToggleIsShow={onToggleIsShow}
        onCloseExstention={onCloseExstention}
        />
        </>
      </div>
    </div>
    </>
  )
}

export default IncognitoMode
