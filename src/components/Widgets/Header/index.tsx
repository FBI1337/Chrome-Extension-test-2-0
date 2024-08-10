import React from "react"
import { RxCross2 } from "react-icons/rx"; 
import styles from "./styles.module.css"

type IProps = {
    name: string
}

const Header:React.FC<IProps> = ({ name }) => {

    const onCloseExstention = () => {
        window.close();
        console.log('Молодец ты закрыл Расширение!')
      }

    return (
        <div className={styles.wrapper}>
            <div className={styles.customfonts}>
                {name}
            </div>
            <div onClick={onCloseExstention} className={styles.logo}>
                <RxCross2 />
            </div>
        </div>

    )
}

export default Header