import React from "react"
import styles from "./styles.module.css"

type IProps = {
    name: string
}

const Header:React.FC<IProps> = ({name}) => {
    return (
        <div className={styles.vraper}>{name}</div>
    )
}

export default Header