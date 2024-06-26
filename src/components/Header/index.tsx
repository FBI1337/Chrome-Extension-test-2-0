import React from "react"
import styles from "./styles.module.css"

type IProps = {
    name: string
}

const Header:React.FC<IProps> = ({ name }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {name}
            </div>
        </div>
    )
}

export default Header