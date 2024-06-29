import React from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

type IProps = {
    isCurrent?: boolean
    img: string
    text: string
    id: number
    onClick?: (id: number) => void
}

const SelectItem: React.FC<IProps> = ({ img, text, onClick, id, isCurrent }) => {

    const onClickFn = onClick ? () => onClick(id) : undefined

    return (
        <div 
            className={cn(styles.currentItemWrapper, {
                [styles.selected]: isCurrent
            })} 
            onClick={onClickFn}
        >
            <img
                src={img} 
                className={styles.currentItemImg}
            />
            <div>
                {text}
            </div>
        </div>
    )
}

export default SelectItem